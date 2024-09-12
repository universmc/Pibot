const fs = require("fs");
const { Telegraf } = require('telegraf');
const axios = require('axios');
const Groq = require('groq-sdk');
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const HID = require('node-hid');
const TensorWindows="╔╗╚╝═║╠╣╦╩╬";
const tensorReplie = '├┤┬┴┼╠╣╩';
const tensorRendu = '─│·░▒▓█';
const devices = HID.devices();
const vendorId = 2064; // Remplacez par votre vendorId
const productId = 58625; // Remplacez par votre productId
const deviceInfo = devices.find(device => device.vendorId === vendorId && device.productId === productId);

if (deviceInfo) {
    console.log('Contrôleur USB détecté:', deviceInfo);
} else {
    console.log('Contrôleur USB non trouvé');
}