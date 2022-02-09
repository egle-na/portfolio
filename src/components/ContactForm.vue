<template>
  <form action="#" method="post">

    <div class="contact-form" :class="{'form--horizontal': isHorizontal, 'form--dark': isDark}">

      <div class="container--short">
        <input id="name" name="name" type="text" placeholder="Name" aria-label="Name" required>
        <input id="email" name="email" type="email" placeholder="E-mail" aria-label="E-mail" required>
      </div>
      <textarea id="message" name="message" placeholder="Enter your message here" aria-label="Message" required></textarea>

    </div>
    <button class="submit-btn" type="submit">Send</button>

  </form>
</template>

<script>
  export default {
    name: "ContactForm",
    props: [ 'isHorizontal', 'isDark' ]
  }
</script>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
  }

  .contact-form {
    display: flex;
    flex-direction:column;
    margin: 1.5em 0 .8em;
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
  .submit-btn:focus {
    background: var(--clr-bg);
    color: var(--clr-accent);
  }

  @media (min-width: 720px) {
    .form--horizontal{
      flex-direction: row;
    }

    .contact-form {
      margin-top: 0;
    }

    .container--short {
      margin-right: .6em;
      width: 55%;
    }

    .contact-container form {
      margin-left: 2em;
      align-self: center;
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