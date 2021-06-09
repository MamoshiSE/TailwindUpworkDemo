<template>
<div>
    <div class="header h-screen bg-gradient-to-b from-gradientBlue-color to-gradientLightblue-color">
          <div class="nav-index mt-0 h-67px bg-white rounded-xl rounded-t-none shadow-box w-screen">
          <hr class="h-5px absolute top-0 w-360px bg-gradient-to-r from-green-color to-blue-color z-10">
    <h3 class="text-left text-14px text-green-color font-semibold font-lato tracking-0.84px pt-26px pl-304px w-39px">Login</h3>

      </div>
        <h3 class="text-center font-lato text-42px tracking-1.26px text-black pt-18px pl-20px w-320px leading-50px">Deine Job website</h3>
              <div class="header-bg h-405px bg-intro bg-no-repeat pt-2px -ml-12px z-10"></div>
         <div class="footer-header w-screen absolute -mt-39px bg-white h-128px bg-white rounded-xl rounded-b-none shadow-box z-10">
            <button class="bg-gradient-to-r from-green-color to-blue-color text-white font-bold py-2 px-4 rounded-xl h-40px mt-24px w-320px ml-20px">
  Kostenlos Registrieren
</button>
    </div>
    </div>
     <div class="container">
  </div>
</div>
</template>

<script>
export default {}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
