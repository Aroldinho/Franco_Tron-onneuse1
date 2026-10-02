require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.post('/api/contact', async (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Champs manquants' });
    }

    try {
        await transporter.sendMail({
            from: `"Franco Tronçonneuse" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `[Contact] ${subject} - ${name}`,
            html: `
                <h2>Nouveau message depuis le site</h2>
                <p><strong>Nom :</strong> ${name}</p>
                <p><strong>Email :</strong> ${email}</p>
                <p><strong>Téléphone :</strong> ${phone || 'Non renseigné'}</p>
                <p><strong>Sujet :</strong> ${subject}</p>
                <hr>
                <p><strong>Message :</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `
        });

        res.json({ success: true, message: 'Email envoyé' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur d\'envoi' });
    }
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`✅ Serveur contact démarré sur le port ${process.env.PORT || 3000}`);
});