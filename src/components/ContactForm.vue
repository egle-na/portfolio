<template>
  <div>
    <form action="#" method="post" class="form" @submit.prevent="sendEmail">

      <div class="contact-form" :class="{'form--horizontal': isHorizontal, 'form--dark': isDark}">

        <div class="container--short">
          <input v-model="name" type="text" placeholder="Name" aria-label="Name" required>
          <input v-model="email" type="email" placeholder="E-mail" aria-label="E-mail" required>
        </div>
        <textarea v-model="message" placeholder="Enter your message here" aria-label="Message" required></textarea>

      </div>
      <button class="submit-btn" type="submit">Send{{ sendingMsg ? "ing..." : "" }}</button>
    </form>
    <FloatingMessage :message="messageSentMsg" v-if="messageSentMsg" @close="messageSentMsg = false"/>
  </div>
</template>
<script>
  import emailjs from '@emailjs/browser';
  import FloatingMessage from "@/components/FloatingMessage";

  emailjs.init("user_MXFHReUi9kA6X7O3L94PD");
  export default {
    name: "ContactForm",
    components: {FloatingMessage},
    props: [ 'isHorizontal', 'isDark' ],
    data() {
      return {
        name: "",
        email: "",
        message: "",
        sendingMsg: false,
        messageSentMsg: false
      }
    },
    methods: {
      sendEmail() {
        this.sendingMsg = true;
        // generate a five-digit number for the contact_number variable
        let contact_number = Math.random() * 100000 | 0;

        let contactForm = {
          contact_number,
          name: this.name,
          message: this.message,
          reply_to: this.email
        }

        emailjs.send('service_contact-me', 'contact-form', contactForm)
            .then(() => {
              this.clearForm();
              this.messageSent(true);
            }).catch(error => {
              console.error(error);
              this.messageSent(false);
            });
      },
      clearForm() {
        console.log(this.name, this);
        this.name = "";
        this.email = "";
        this.message = "";
      },
      messageSent(sent) {
        this.sendingMsg = false;
        this.messageSentMsg = sent
            ? "Message sent successfully!"
            : "Could not send the message. Please try to contact me in other ways."
        setTimeout(() => {
          this.messageSentMsg = false;
        }, 8000)
      }
    }
  }
</script>

<style scoped>

  .form {
    display: flex;
    flex-direction: column;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    margin-bottom: .8em;
  }

  .contact-form input,
  .contact-form textarea {
    font: inherit;
    width: 100%;
    margin: 0 0 .6em;
    /*border: 0;*/
    padding: .55em 1em;
    border: solid 3px var(--clr-white);
    border-radius: 3px;
  }

  .contact-form textarea {
    resize: vertical;
  }

  .contact-form input:hover,
  .contact-form input:focus,
  .contact-form textarea:hover,
  .contact-form textarea:focus {
    border-bottom-color: var(--clr-accent);
    border-right-color: var(--clr-accent);
    outline: none;
  }

  .submit-btn {
    font-family: var(--ff-dosis);
    font-weight: 700;
    letter-spacing: .2em;
    text-transform: uppercase;
    background: var(--clr-accent);
    color: var(--clr-bg);
    border: solid var(--clr-accent);
    border-radius: 3px;

    width: -moz-fit-content;
    width: fit-content;
    padding: .7em 2.4em;
    align-self: flex-end;
  }

  .submit-btn:hover,
  .submit-btn:focus:active {
    background: var(--clr-bg);
    color: var(--clr-accent);
  }

  @media (min-width: 770px) {
    /*.form {*/
    /*  display: flex;*/
    /*  flex-direction: column;*/
    /*}*/

    .contact-form {
      /*display: flex;*/
      /*flex-direction: column;*/
      margin-top: 0;
    }

    .form--horizontal {
      flex-direction: row;
    }

    .container--short {
      margin-right: .6em;
      width: 55%;
    }

    .contact-container form {
      margin-left: 2em;
      /*align-self: center;*/
    }

    .contact-container textarea{
      min-height: 180px;
    }

    .contact-container .submit-btn,
    .contact-container .container--short {
      width: 100%;
    }
  }

  .form--dark input,
  .form--dark textarea {
    border: solid 1px transparent;

    color: var(--clr-white);
    /*background: #32353a;*/
    background: #26282c;
  }

  .form--dark input::placeholder,
  .form--dark textarea::placeholder {
    color: #add1fd;
    /*color: var(--clr-accent);*/
    opacity: 1;
  }

  .form--dark input:hover,
  .form--dark input:focus,
  .form--dark textarea:hover,
  .form--dark textarea:focus {
    border-bottom-color: #81beff;
    border-right-color: #81beff;
  }

</style>