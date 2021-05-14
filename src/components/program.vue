<template>
  <div class="pages">
    <!-- Header -->
        <Header></Header>
    <!-- Header ends -->

    <!-- Content starts -->
    <div class="bd-container">
         <h6 class="mb-md mt-md">Welcome To <br>
          Intervention Reporter</h6>
    </div>

    <!-- Button group -->
    <div class="bd-container">
      <button class="btn-m-pry-in">
        <span class="iconify" data-icon="akar-icons:plus" data-inline="false"></span>
      ADD A REPORT</button>

        <button class="btn-m-sec-in ml-md">
      VIEW REPORT</button>
    </div>

    <!-- Programs section -->
    <div class="bd-container mt-lg">
        <div class="content">
            <div class="content__a">

              <h6 class="tb">Create New Program</h6>
              <form class="form">
                <label for="name">Program Name:</label>
                <input type="text" class="" placeholder="Enter Program Name">

                 <label class="mt-sm" for="name">Program Acronymn:</label>
                <input type="text" class="" placeholder="Enter Program Acronymn">

                <button class="btn-m-pry-in mt-sm">
                   SUBMIT</button>

              </form>
        
            </div>
                <div class="content__b">
                  <h6 class="tb">Available Programs</h6>
                  
                  <div class="pill-group">
                    <div class="pill-group__pill">
                      NISRAL <span>View</span>
                    </div>
                  </div>

                </div>
        </div>
    </div>
  

    <!-- Footer -->
        <!-- <Footer></Footer> -->
    <!-- Footer ends -->
  </div>

</template>

<script>
import Header from './Header'
// import Footer from './Footer'
// import Icon from './icons/Icons'

export default {
  name: 'Program',

  components: {
        Header,
        // Footer,
        // Icon
    }
  
}
</script>



