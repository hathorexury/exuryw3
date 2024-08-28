<template>
  <div class="footer-wrapper">
    <hr />
    <p class="footer-top">La inversión en criptoactivos no está regulada, puede no ser adecuada para inversores minoristas y perderse la totalidad del importe invertido Es importante leer y comprender los riesgos de esta inversión que se explican detalladamente en esta ubicación.</p>
    <div class="footer-mid">
      <div>
        <img
          class="logo-footer"
          alt=""
          src="/LogoExury1.png"
        />
        <p>Calle Hermosilla 48, 1. dcha.
          Madrid, Spain</p>
        <p>contact@exury.io</p>
      </div>
      <div>
        <h2>Seguridad & Legal</h2>
        <ul>
          <li>Politica de Privacidad</li>
          <li>Terminos y Condiciones</li>
          <li>Cookies</li>
          <li>Licencias</li>
        </ul>
      </div><div>
      <h2>Tendencias</h2>
      <ul>
        <li>Tendencia 1</li>
        <li>Tendencia 2</li>
        <li>Tendencia 3</li>
        <li>Tendencia 4</li>
      </ul>
    </div>
      <div>
        <h2 class="newsletter">Newsletter</h2>
        <v-text-field
          append-inner-icon="mdi-email-outline"
          label="Email"
          variant="outlined"
          class="input-newsletter"
        ></v-text-field>
        <v-btn rounded color="primary" class="btn-subscribe text-capitalize">Suscribirse</v-btn>
      </div>
    </div>
    <hr />
    <div class="footer-bottom">
      <div class="social-icons">
        <v-icon icon="mdi-whatsapp"></v-icon>
        <v-icon icon="mdi-instagram"></v-icon>
        <v-icon icon="mdi-twitter"></v-icon>
      </div>
      <div>
        <p>A product of </p>
      </div>
      <div>
        <p>© 2024 Exury. All rights reserved</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "@/styles/variables.scss";
.footer-wrapper{
  width: 100%;
  height: fit-content;
  padding: 0 16px 0 0;
  margin-top: 60px;
  .footer-top {
    padding: 14px 16px;
    background: #e1ece7;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #323836;
    border-radius: 4px;
    margin-bottom: 50px;
    margin-top: 64px;
  }
  .footer-mid {
    display: flex;
    justify-content: space-between;
    margin-bottom: 64px;

    .btn-subscribe {
      width: 250px;
    }
    .logo-footer {
      margin-bottom: 30px;
      width: 147px;
    }
    input {
      width: 200px;
      height: 40px;
    }
    div:nth-child(1){
      width: 250px;
      p {
        margin-bottom: 5px;
      }
    }
    h2 {
      color: #E6E1E3;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 28px;
      margin-bottom: 24px;
    }
    ul li {
      color: #E6E1E3;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      opacity: 0.65;
      list-style: none;
      margin-bottom: 16px;
    }
  }
  .footer-bottom {
    padding: 23px 0 0 0;
    display: flex;
    justify-content: space-between;
    .social-icons > * {
      margin-right: 16px;
    }
  }
}
@media (max-width: $screen-md) {
  .footer-wrapper{
    width: 100%;
    height: fit-content;
    padding: 0 16px;
    margin-top: 64px;
    .footer-top {
      padding: 14px 16px;
      background: #e1ece7;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      color: #323836;
      border-radius: 4px;
      margin-bottom: 50px;
      margin-top: 64px;
    }
    .footer-mid {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 64px;
      gap: 48px;
      .btn-subscribe {
        width: 100%;
        padding: 24px 10px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .logo-footer {
        margin-bottom: 30px;
        width: 147px;
      }
      div:nth-child(1){
        width: 250px;
        p {
          margin-bottom: 5px;
        }
      }
      h2 {
        color: #E6E1E3;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 28px;
      }
      ul li {
        color: #E6E1E3;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        opacity: 0.65;
        list-style: none;
        margin-bottom: 16px;
      }
      .newsletter {
        margin-bottom: 25px;
      }
    }
    .footer-bottom {
      padding: 23px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: 48px;
      .social-icons > * {
        margin-right: 16px;
      }
    }
  }
}
@media (max-width: $screen-sm) {
  .footer-wrapper{
    width: 100%;
    height: fit-content;
    padding: 0 16px;
    margin-top: 50px;
    .footer-top {
      padding: 14px 16px;
      background: #373f3c;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      color: #c7d4cf;
      border-radius: 4px;
      margin-bottom: 50px;
      margin-top: 64px;
    }
    .footer-mid {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 64px;
      gap: 48px;
      .input-newsletter {
        padding: 0;
        width: fit-content;
      }

      .btn-subscribe {
        width: 100%;
        padding: 24px 10px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .logo-footer {
        margin-bottom: 30px;
        width: 147px;
      }
      div:nth-child(1){
        width: 250px;
        p {
          margin-bottom: 5px;
        }
      }
      h2 {
        color: #E6E1E3;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 28px;
      }
      ul li {
        color: #E6E1E3;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        opacity: 0.65;
        list-style: none;
        margin-bottom: 16px;
      }
      .newsletter {
        margin-bottom: 25px;
      }
      input {
        min-width: 100%;
        max-width: 100%;
        width: 100%;
        margin: 0;
      }
    }
    .footer-bottom {
      padding: 23px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: 48px;
      .social-icons > * {
        margin-right: 16px;
      }
    }
  }
}
</style>
