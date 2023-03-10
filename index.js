const baseURL= "https://pokemonapi20230216124134.azurewebsites.net/api/auth";

Vue.createApp({
    data() {
        return {
            email: {mail:"", prop2:"wee"},
            login: {mail:"", prop2:""},
        }
    },
    created() {
        this.helperGetAndShow()
    },
    methods: {
        async helperGetAndShow() { 
            try {
                const response = await axios.get(baseURL, {withCredentials: true})
                this.login = await response.data
                console.log("Mail get response: " + this.login.mail)
            } catch (ex) {
                alert(ex.message) // https://www.w3schools.com/js/js_popup.asp
            }
        },
        async sendMail() {
            try {
                response = await axios.post(baseURL, this.email, {withCredentials: true})
                console.log("response " + response.status + " " + response.statusText + ", Mail is set")
                this.helperGetAndShow()
            } catch (ex) {
                alert(ex.message)
                console.log(this.login)
            }

        },
    }
}).mount("#app")