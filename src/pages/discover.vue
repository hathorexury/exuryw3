<template>
  <div class="discover-us-wrapper">
    <div class="title-wrapper">
      <h2 class="title">Discover us</h2>
      <p class="paragraph">Explora cómo EXURY transforma el intercambio de criptomonedas con seguridad respaldada por el Banco de España y un toque humano inigualable. Unete a la 1ra plataforma SIN CUSTODIA del mercado.</p>
    </div>
    <div class="discover-content-wrapper">
      <div class="box-wrapper">
        <img src="/image5.png">
        <div class="box-text-wrapper">
          <h3>¡Libertad Financiera Total!</h3>
          <p>¿Cansado de plataformas que te quitan el control de tus activos?<br/><br/>
            Con EXURY, tu decides dónde recibir tus criptomonedas, respaldado por la seguridad de un socio humano, no un algoritmo.</p>
          <v-btn rounded variant="outlined" class="box-btn-action text-capitalize">How it works?</v-btn>
        </div>
      </div><div class="box-wrapper">
      <img src="/image5.png">
      <div class="box-text-wrapper">
        <h3>Seguridad Total y Sin Custodia</h3>
        <p>Al no custodiar tus fondos, eliminamos el riesgo de pérdida o robo. Disfruta de transacciones seguras y protegidas con encriptacion.</p>
        <v-btn rounded variant="outlined" class="box-btn-action text-capitalize">How it works?</v-btn>
      </div>
    </div><div class="box-wrapper">
      <img src="/image5.png">
      <div class="box-text-wrapper">
        <h3>Optimiza Tu Cartera con Consultoría Premium</h3>
        <p>Mas que una plataforma de intercambio, accede y recibe:<br/>
          <ul>
            <li><v-icon class="icon">mdi-check-circle-outline</v-icon><p>Una consultoria gratuita y personalizada con nuestros expertos en criptomonedas.</p></li>
            <li><v-icon class="icon">mdi-check-circle-outline</v-icon><p>Un analisis detallado de tu cartera.</p></li>
            <li><v-icon class="icon">mdi-check-circle-outline</v-icon><p>Estrategias efectivas para potenciar tus inversiones.</p></li>
            <li><v-icon class="icon">mdi-check-circle-outline</v-icon><p>Este bono de alto costo en el mercado, esta incluido sin cargo adicional, para impulsar tus resultados financieros.</p></li>
          </ul>
        </p>
        <v-btn rounded variant="outlined" class="box-btn-action text-capitalize">Buy Crypto</v-btn>
      </div>
    </div><div class="box-wrapper">
      <img src="/image5.png">
      <div class="box-text-wrapper">
        <h3>Satisfación Asegurada</h3>
        <p>Si no estás completamente satisfecho con tu intercambio, te ofrecemos un descuento asegurado en tu próxima transacción.</p>
        <v-btn rounded variant="outlined" class="box-btn-action text-capitalize">Buy Crypto</v-btn>
      </div>
    </div><div class="box-wrapper">
      <img src="/image5.png">
      <div class="box-text-wrapper">
        <h3>¡Sé de los Primeros 100, Maximiza tus Beneficios!</h3>
        <p>Esta oferta exclusiva es para los primeros 100 usuarios que realicen un intercambio en nuestra plataforma. ¡Aprovecha antes de que termine!</p>
        <v-btn rounded variant="outlined" class="box-btn-action text-capitalize">Buy Crypto</v-btn>
      </div>
    </div><div class="box-wrapper">
      <img src="/image5.png">
      <div class="box-text-wrapper">
        <h3>Intercambia con la Tranquilidad y Protección que
          Solo un Proveedor Regulado Puede Ofrecer</h3>
        <p>En EXURY estamos regulados por el Banco de España, asegurando la protección en cada transacción.<br/>
          <ul>
            <li><v-icon class="icon">mdi-check-circle-outline</v-icon><p>Una consultoria gratuita y personalizada con nuestros expertos en criptomonedas.</p></li>
            <li><v-icon class="icon">mdi-check-circle-outline</v-icon><p>Seguridad Garantizada: Cada transaccion esta protegida bajo normas AML/FT “Anti Money Laundering & Financial Terrorism”</p></li>
          </ul></p>
        <v-btn rounded variant="outlined" class="box-btn-action text-capitalize">How it works?</v-btn>
      </div>
    </div><div class="box-wrapper">
      <img src="/image5.png">
      <div class="box-text-wrapper">
        <h3>Únete a la Revolución Financiera con EXURY</h3>
        <p>Imagina un mundo donde tus inversiones están protegidas y tienes libertad de escoger donde recibir tus criptomonedas.<br/><br/>
          Te invitamos a ser parte de algo más grande que un simple intercambio de criptomonedas; te invitamos a formar parte de una revolución en la forma en que manejas tu dinero.</p>
        <v-btn rounded variant="outlined" class="box-btn-action text-capitalize">Register Now</v-btn>
      </div>
    </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
<style lang="scss">
@import "@/styles/variables.scss";
  .discover-us-wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 32px;
    gap: 48px;
    .discover-content-wrapper {
      display: flex;
      flex-direction: column;
      gap: 120px;
      padding: 0 16px 0 0;
      .box-wrapper {
        display: flex;
        align-items: center;
        gap: 104px;
        .box-text-wrapper {
          h3 {
            color: #1CBA75;
            font-size: 28px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: -0.56px;
            margin-bottom: 16px;
          }
          p {
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            ul {
              margin-top: 24px;
              list-style-type: none;
              padding-left: 16px;
              display: flex;
              flex-direction: column;
              gap: 8px;
              li {
                display: flex;
                gap: 8px;
                align-items: flex-start;
                .icon {
                  color: #1CBA75;
                  font-size: 24px;
                }
                p {
                  font-size: 18px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: normal;
                }
              }
            }
          }
          .box-btn-action {
            margin-top: 24px;
            border: 0.1px solid white;
            color: #1cba75;
          }
        }
      }
      .box-wrapper:nth-child(even) {
        flex-direction: row-reverse;
      }
    }
  }
  @media (max-width: $screen-sm) {
    .discover-us-wrapper {
      gap: 48px;
      padding: 0 16px;
      .discover-content-wrapper {
        gap: 104px;
        padding: 0;
        .box-wrapper {
          flex-direction: column;
          gap: 32px;
          .box-text-wrapper {
            h3 {
              font-size: 24px;
              margin-bottom: 16px;
              text-align: center;
              width: 100%;
            }
            p {
              font-size: 16px;
              ul {
                margin-top: 16px;
                li {
                  .icon {
                    font-size: 20px;
                  }
                  p {
                    font-size: 16px;
                  }
                }
              }
            }
            .box-btn-action {
              margin-top: 24px;
              width: 100%;
            }
          }
        }
        .box-wrapper:nth-child(even) {
          flex-direction: column;
        }
      }
    }
  }
</style>
