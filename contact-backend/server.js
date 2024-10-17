const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const ExcelJS = require('exceljs');

const app = express();
app.use(cors({
    origin: 'http://localhost:5174' // Allow requests from this origin
}));
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://mishra123:mishra123@cluster0.rpgre.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// Contact Model
const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
});

const Contact = mongoose.model('Contact', ContactSchema);

// POST route to add a contact
app.post('/api/contacts', async (req, res) => {
    console.log('Request received:', req.body); // Log incoming requests
    const { name, email, message } = req.body;
    try {
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(201).json({ message: "Contact saved successfully!" });
    } catch (error) {
        console.error('Error saving contact:', error); // Log the error
        res.status(500).json({ error: "Failed to save contact." });
    }
});


// GET route to export contacts to Excel
app.get('/api/contacts/export', async (req, res) => {
    try {
        const contacts = await Contact.find();
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Contacts');
        worksheet.columns = [
            { header: 'Name', key: 'name', width: 30 },
            { header: 'Email', key: 'email', width: 30 },
            { header: 'Message', key: 'message', width: 50 },
        ];

        contacts.forEach(contact => {
            worksheet.addRow(contact);
        });

        res.setHeader(
            'Content-Type',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        );
        res.setHeader(
            'Content-Disposition',
            'attachment; filename=' + 'contacts.xlsx'
        );

        await workbook.xlsx.write(res);
        res.end();
    } catch (error) {
        res.status(500).send('Error generating Excel file.');
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
