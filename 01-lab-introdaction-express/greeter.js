function greed(name, cb){
    const message = `Hi ${name}`;
    console.log(message);
    cb(message);
}

function formatGreed(name){
    console.log(`Hello, ${name} ! How do you do ?`);
}

module.exports = {
    greed: greed,
    formatGreed: formatGreed,
};