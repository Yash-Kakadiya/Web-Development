const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded());

const port = 3000;

//Array of Objects
let devices = [
    {
        id: "001",
        name: "Smartphone Plus",
        type: "Mobile",
        manufacturer: "TechBrand",
        year: 2024
    },
    {
        id: "002",
        name: "Laptop Air",
        type: "Laptop",
        manufacturer: "GadgetMaker",
        year: 2023
    },
    {
        id: "003",
        name: "Tablet Mini",
        type: "Tablet",
        manufacturer: "TechBrand",
        year: 2024
    },
    {
        id: "004",
        name: "Smartwatch X",
        type: "Wearable",
        manufacturer: "WearTech",
        year: 2024
    },
    {
        id: "005",
        name: "Bluetooth Speaker",
        type: "Audio",
        manufacturer: "SoundGear",
        year: 2023
    }
];

// CREATE: Add a new device
app.post('/devices', (req, res) => {
    const obj = req.body;
    devices.push(obj);
    res.send(devices);
});

// READ:
// getAllX
app.get('/devices', (req, res) => {
    res.send(devices);
});

//getXByID
app.get('/devices/:id', (req, res) => {
    const idx = devices.findIndex(stu => stu.id == req.params.id);
    res.send(devices[idx]);
});

// UPDATE: Update a deivce's details
app.put('/devices/:id', (req, res) => {
    const idx = devices.findIndex(stu => stu.id == req.params.id);
    const obj = req.body;
    devices[idx] = { ...devices[idx], ...obj };
    res.send(devices);
});
app.patch('/devices/:id', (req, res) => {
    const idx = devices.findIndex(stu => stu.id == req.params.id);
    const obj = req.body;
    devices[idx] = { ...devices[idx], ...obj };
    res.send(devices);
});

// DELETE: Remove a device
app.delete('/devices/:id', (req, res) => {
    const idx = devices.findIndex(stu => stu.id == req.params.id);
    if (idx == -1) {

        res.json({
            "msg": "ID not found. 😔",
            "data": devices
        });
        return;
    }
    devices.splice(idx, 1);
    res.send(devices);

});

app.listen(port, () => {
    console.log(`listening at port ${port}.`);
})