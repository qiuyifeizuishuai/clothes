<template>
  <div>
    <div id="subtitle-wrapper" class="lazyload" data-bg="images/subtitle-wrapper01.jpg">
      <div class="subtitle-wrapper-img lazyload" data-bg="images/subtitle-wrapper01-img.jpg">
        <div class="container container-fluid-xl">
          <div class="tt-breadcrumbs">
            <ul>
              <li>home</li>
              <li>inquire</li>
            </ul>
          </div>
          <h1 class="subtitle__title">Inquire</h1>
        </div>
        <div class="bubbleContainer">
          <div class="bubble-1"></div>
          <div class="bubble-2"></div>
          <div class="bubble-3"></div>
          <div class="bubble-4"></div>
          <div class="bubble-5"></div>
          <div class="bubble-6"></div>
          <div class="bubble-7"></div>
          <div class="bubble-8"></div>
          <div class="bubble-9"></div>
          <div class="bubble-10"></div>
        </div>
      </div>
    </div>
    <div class="inquireDiv">
      <div class="search">
        <input type="text"  placeholder="Search text...">
        <button class="tt-btn-icon icons-2089805"><span>Search</span></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "inquire"
}
</script>

<style scoped>
.inquireDiv{display: flex;flex-direction: column;align-items: center}
.search{display: flex;align-items: center;margin: 40px 0 60px}
.search input{width: 300px;height: 40px;text-indent: 1em;border-style: none;border: 1px solid #ddd;border-radius: 4px}
.search button{height: 40px;border-style: none;background: #54b963;padding: 0 20px;color: #fff;}
.search button span{margin-left: 3px}
</style>