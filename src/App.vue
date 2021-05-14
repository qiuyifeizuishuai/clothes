<template>
  <div>
    <header id="tt-header">
      <!-- holder-top (desktop) -->
      <div class="holder-top-desktop d-none d-md-block">
        <div class="row">
          <div class="col-auto">
            <div class="h-info01">
              <div class="tt-item">
                <address>
                  8494 Signal Hill Road Manassas, VA, 20110
                </address>
              </div>
              <div class="tt-item">
                Mon-Fri 08:00 AM - 05:00 PM
              </div>
              <div class="tt-item">
                <a href="mailto:info@santizex-site.com">
                  info@yourcompany.com
                </a>
              </div>
            </div>
          </div>
          <div class="col-auto ml-auto">
            <div class="tt-obj">
              <div class="h-info02">
                <div class="tt-item">
                  <address>
                    <a href="tel:1(800)765-43-21"><span class="icons-483947"></span> 1 (800) 765-43-21</a>
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /holder-top (desktop) -->
      <!-- holder- -->
      <div id="js-init-sticky">
        <div class="tt-holder-wrapper">
          <div class="tt-holder">
            <div class="tt-col-left">
              <!-- logo -->
              <img src="./assets/img/logo.png" alt="" width="188px">
              <!-- /logo -->
            </div>
            <div class="tt-col-center tt-col-wide tt-col-objects text-center">
              <div class="tt-col__item">
                <!-- desktop-nav -->
                <nav id="tt-nav">
                  <ul>
                    <li @click="isRouter('/')"><span>Home</span></li>
                    <li  @click="isRouter('/inquire')"><span>Inquire</span></li>
                    <li  @click="isRouter('/contacts')"><span>Contacts</span></li>
                  </ul>
                </nav>
                <!-- /desktop-nav -->
              </div>
            </div>
            <div class="tt-col-right tt-col-objects">
              <div class="tt-col__item d-block d-lg-none">
                <div class="h-info02">
                  <div class="tt-item">
                    <address>
                      <a href="tel:1(800)7654321"><span class="icons-483947"></span> 1 (800) 765-43-21</a>
                    </address>
                  </div>
                </div>
              </div>
              <div class="tt-col__item d-none d-md-block">
                <a href="#" class="tt-btn" data-toggle="modal" data-target="#modalMRequestQuote">
                  <span class="mask">Schedule a Pickup</span>
                  <div class="button">Schedule a Pickup</div>
                </a>
              </div>
              <div class="tt-col__item toggle-wrapper">
                <a href="#" id="tt-menu-toggle" class="icons-1828859"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <router-view />
    <footer id="tt-footer">
      <div class="footer-wrapper01">
        <div class="container container-fluid-xl">
          <div class="row f-col-wrapper">
            <!-- logo -->

            <!-- /logo -->
            <div class="col-md-4">
              <img src="./assets/img/logo.png" alt="" style="width: 188px">

              <div class="f-text">
                We are professionals in the laundry and dry cleaning business, which means we always stay up to date on the latest technologies and cleaning methods.
              </div>
            </div>
            <div class="col-md-4">
              <h6 class="f-title">Contacts</h6>
              <ul class="f-info">
                <li><i class="icons-484169"></i> 501 west 168th st. Suit 4, New York, NY 10032</li>
                <li><i class="icons-59252"></i> Mon-Fri: 8am - 5pm<br> Sat-Sun: 10am - 5pm</li>
                <li><a href="mailto:info@yourlaundrysite.com"><i class="icons-1004017"></i> support@simplifiedcleaner.com</a></li>
                <li><strong><a href="tel:1(800)765-43-21"><i class="icons-4839471"></i> (929)-320-7865</a></strong></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      <div class="container container-fluid-xl">
        <div class="f-holder">
          <div class="f-copyright">
            Copyright 2019-2021 @ Simplified Cleaner. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Router from './router'
export default defineComponent({
  name: 'App',
  setup() {
    function isRouter(name) {
      Router.push(name)
    }
    return {
      isRouter
    }
  }
})
</script>

