import React from "react";

const Temp1 = ({
  title,
  hero,
  subheading,
  buttonText,
  aboutUsHeading,
  aboutUsDesc,
  aboutUsList,
  servicesHeading,
  services,
  whyUsHeading,
  whyUs,
  testimonials,
  address,
  phone,
  ourMoto,
  heroImg,
  aboutUsImg,
  servicesImg,
  whyUsImg,
  ourProjectsImg,
}) => {
  return (
    <div className="home page-template-default page page-id-13 wp-custom-logo ast-desktop ast-page-builder-template ast-no-sidebar astra-4.8.7 ast-single-post ast-replace-site-logo-transparent ast-inherit-site-logo-transparent ast-theme-transparent-header ast-hfb-header elementor-default elementor-kit-4 elementor-page elementor-page-13">
      <a
        class="skip-link screen-reader-text"
        href="#content"
        title="Skip to content"
      >
        Skip to content
      </a>

      <div class="hfeed site" id="page">
        <header
          class="site-header header-main-layout-1 ast-primary-menu-enabled ast-logo-title-inline ast-hide-custom-menu-mobile ast-builder-menu-toggle-icon ast-mobile-header-inline"
          id="masthead"
          itemtype="https://schema.org/WPHeader"
          itemscope="itemscope"
          itemid="#masthead"
        >
          <div id="ast-desktop-header" data-toggle-type="dropdown">
            <div class="ast-main-header-wrap main-header-bar-wrap">
              <div
                class="ast-primary-header-bar ast-primary-header main-header-bar site-header-focus-item"
                data-section="section-primary-header-builder"
              >
                <div
                  class="site-primary-header-wrap ast-builder-grid-row-container site-header-focus-item ast-container"
                  data-section="section-primary-header-builder"
                >
                  <div class="ast-builder-grid-row ast-builder-grid-row-has-sides ast-grid-center-col-layout">
                    <div class="site-header-primary-section-left site-header-section ast-flex site-header-section-left">
                      <div
                        class="ast-builder-layout-element ast-flex site-header-focus-item"
                        data-section="title_tagline"
                      >
                        <div
                          class="site-branding ast-site-identity"
                          itemtype="https://schema.org/Organization"
                          itemscope="itemscope"
                        >
                          <span
                            style={{
                              color: "white",
                              fontWeight: "bold",
                              fontFamily: "Bricolage Grotesque, sans-serif",
                              fontSize: "30px",
                            }}
                          >
                            {title}
                          </span>
                        </div>
                      </div>
                      <div class="site-header-primary-section-left-center site-header-section ast-flex ast-grid-left-center-section"></div>
                    </div>
                    <div class="site-header-primary-section-center site-header-section ast-flex ast-grid-section-center">
                      <div
                        class="ast-builder-menu-1 ast-builder-menu ast-flex ast-builder-menu-1-focus-item ast-builder-layout-element site-header-focus-item"
                        data-section="section-hb-menu-1"
                      >
                        <div class="ast-main-header-bar-alignment">
                          <div class="main-header-bar-navigation">
                            <nav
                              class="site-navigation ast-flex-grow-1 navigation-accessibility site-header-focus-item"
                              id="primary-site-navigation-desktop"
                              aria-label="Site Navigation: Primary Menu"
                              itemtype="https://schema.org/SiteNavigationElement"
                              itemscope="itemscope"
                            >
                              <div class="main-navigation ast-inline-flex">
                                <ul
                                  id="ast-hf-menu-1"
                                  class="main-header-menu ast-menu-shadow ast-nav-menu ast-flex submenu-with-border stack-on-mobile"
                                >
                                  <li
                                    id="menu-item-29"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-13 current_page_item menu-item-29"
                                  >
                                    <a
                                      href="https://websitedemos.net/gardening-and-landscape-02/"
                                      aria-current="page"
                                      class="menu-link"
                                    >
                                      Home
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-28"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-28"
                                  >
                                    <a
                                      href="https://websitedemos.net/gardening-and-landscape-02/about/"
                                      class="menu-link"
                                    >
                                      About
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-27"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-27"
                                  >
                                    <a
                                      href="https://websitedemos.net/gardening-and-landscape-02/services/"
                                      class="menu-link"
                                    >
                                      Services
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-26"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-26"
                                  >
                                    <a
                                      href="https://websitedemos.net/gardening-and-landscape-02/projects/"
                                      class="menu-link"
                                    >
                                      Projects
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-25"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-25"
                                  >
                                    <a
                                      href="https://websitedemos.net/gardening-and-landscape-02/contact/"
                                      class="menu-link"
                                    >
                                      Contact
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="site-header-primary-section-right site-header-section ast-flex ast-grid-right-section">
                      <div class="site-header-primary-section-right-center site-header-section ast-flex ast-grid-right-center-section"></div>
                      <div
                        class="ast-builder-layout-element ast-flex site-header-focus-item ast-header-button-1"
                        data-section="section-hb-button-1"
                      >
                        <div class="ast-builder-button-wrap ast-builder-button-size-">
                          <a
                            class="ast-custom-button-link"
                            href="#"
                            target="_self"
                          >
                            <div class="ast-custom-button">{buttonText}</div>
                          </a>
                          <a class="menu-link" href="#" target="_self">
                            {buttonText}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="ast-mobile-header"
            class="ast-mobile-header-wrap"
            data-type="dropdown"
          >
            <div class="ast-main-header-wrap main-header-bar-wrap">
              <div
                class="ast-primary-header-bar ast-primary-header main-header-bar site-primary-header-wrap site-header-focus-item ast-builder-grid-row-layout-default ast-builder-grid-row-tablet-layout-default ast-builder-grid-row-mobile-layout-default"
                data-section="section-primary-header-builder"
              >
                <div class="ast-builder-grid-row ast-builder-grid-row-has-sides ast-builder-grid-row-no-center">
                  <div class="site-header-primary-section-left site-header-section ast-flex site-header-section-left">
                    <div
                      class="ast-builder-layout-element ast-flex site-header-focus-item"
                      data-section="title_tagline"
                    >
                      <div
                        class="site-branding ast-site-identity"
                        itemtype="https://schema.org/Organization"
                        itemscope="itemscope"
                      >
                        <span
                          style={{
                            color: "white",
                            fontWeight: "bold",
                            fontFamily: "Bricolage Grotesque, sans-serif",
                            fontSize: "30px",
                          }}
                        >
                          {title}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="site-header-primary-section-right site-header-section ast-flex ast-grid-right-section">
                    <div
                      class="ast-builder-layout-element ast-flex site-header-focus-item"
                      data-section="section-header-mobile-trigger"
                    >
                      <div class="ast-button-wrap">
                        <button
                          type="button"
                          class="menu-toggle main-header-menu-toggle ast-mobile-menu-trigger-outline"
                          aria-expanded="false"
                        >
                          <span class="screen-reader-text">Main Menu</span>
                          <span class="mobile-menu-toggle-icon">
                            <span
                              aria-hidden="true"
                              class="ahfb-svg-iconset ast-inline-flex svg-baseline"
                            >
                              <svg
                                class="ast-mobile-svg ast-menu-svg"
                                fill="currentColor"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
                              </svg>
                            </span>
                            <span
                              aria-hidden="true"
                              class="ahfb-svg-iconset ast-inline-flex svg-baseline"
                            >
                              <svg
                                class="ast-mobile-svg ast-close-svg"
                                fill="currentColor"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
                              </svg>
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="ast-mobile-header-content content-align-flex-start">
              <div
                class="ast-builder-menu-mobile ast-builder-menu ast-builder-menu-mobile-focus-item ast-builder-layout-element site-header-focus-item"
                data-section="section-header-mobile-menu"
              >
                <div class="ast-main-header-bar-alignment">
                  <div class="main-header-bar-navigation">
                    <nav
                      class="site-navigation ast-flex-grow-1 navigation-accessibility site-header-focus-item"
                      id="ast-mobile-site-navigation"
                      aria-label="Site Navigation: Primary Menu"
                      itemtype="https://schema.org/SiteNavigationElement"
                      itemscope="itemscope"
                    >
                      <div class="main-navigation">
                        <ul
                          id="ast-hf-mobile-menu"
                          class="main-header-menu ast-nav-menu ast-flex submenu-with-border astra-menu-animation-fade stack-on-mobile"
                        >
                          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-13 current_page_item menu-item-29">
                            <a
                              href="https://websitedemos.net/gardening-and-landscape-02/"
                              aria-current="page"
                              class="menu-link"
                            >
                              Home
                            </a>
                          </li>
                          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-28">
                            <a
                              href="https://websitedemos.net/gardening-and-landscape-02/about/"
                              class="menu-link"
                            >
                              About
                            </a>
                          </li>
                          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-27">
                            <a
                              href="https://websitedemos.net/gardening-and-landscape-02/services/"
                              class="menu-link"
                            >
                              Services
                            </a>
                          </li>
                          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-26">
                            <a
                              href="https://websitedemos.net/gardening-and-landscape-02/projects/"
                              class="menu-link"
                            >
                              Projects
                            </a>
                          </li>
                          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-25">
                            <a
                              href="https://websitedemos.net/gardening-and-landscape-02/contact/"
                              class="menu-link"
                            >
                              Contact
                            </a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div id="content" class="site-content">
          <div class="ast-container">
            <div id="primary" class="content-area primary">
              <main id="main" class="site-main">
                <article
                  class="post-13 page type-page status-publish ast-article-single"
                  id="post-13"
                  itemtype="https://schema.org/CreativeWork"
                  itemscope="itemscope"
                >
                  <header class="entry-header ast-no-thumbnail ast-no-title ast-header-without-markup"></header>

                  <div class="entry-content clear" itemprop="text">
                    <div
                      data-elementor-type="wp-page"
                      data-elementor-id="13"
                      class="elementor elementor-13"
                    >
                      <div
                        class="elementor-element elementor-element-3c4bd21 e-flex e-con-boxed e-con e-parent"
                        data-id="3c4bd21"
                        data-element_type="container"
                        data-settings='{"background_background":"classic"}'
                        style={{
                          backgroundImage: `url(${heroImg})`,
                        }}
                      >
                        <div class="e-con-inner">
                          <div
                            class="elementor-element elementor-element-f5aae62 elementor-widget elementor-widget-heading"
                            data-id="f5aae62"
                            data-element_type="widget"
                            data-widget_type="heading.default"
                          >
                            <div class="elementor-widget-container">
                              <h1 class="elementor-heading-title elementor-size-default">
                                {hero}
                              </h1>
                            </div>
                          </div>
                          <div
                            class="elementor-element elementor-element-4d82d5f elementor-widget elementor-widget-text-editor"
                            data-id="4d82d5f"
                            data-element_type="widget"
                            data-widget_type="text-editor.default"
                          >
                            <div class="elementor-widget-container">
                              {subheading}
                            </div>
                          </div>
                          <div
                            class="elementor-element elementor-element-b09ce85 e-con-full e-flex e-con e-child"
                            data-id="b09ce85"
                            data-element_type="container"
                          >
                            <div
                              class="elementor-element elementor-element-05ef6a6 elementor-widget__width-auto elementor-widget elementor-widget-button"
                              data-id="05ef6a6"
                              data-element_type="widget"
                              data-widget_type="button.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="elementor-button-wrapper">
                                  <a
                                    class="elementor-button elementor-button-link elementor-size-sm"
                                    href="#"
                                  >
                                    <span class="elementor-button-content-wrapper">
                                      <span class="elementor-button-text">
                                        {buttonText}
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-de66673 elementor-widget__width-auto elementor-widget elementor-widget-button"
                              data-id="de66673"
                              data-element_type="widget"
                              data-widget_type="button.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="elementor-button-wrapper">
                                  <a
                                    class="elementor-button elementor-button-link elementor-size-sm"
                                    href="#"
                                  >
                                    <span class="elementor-button-content-wrapper">
                                      <span class="elementor-button-text">
                                        Call Us Now
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="elementor-element elementor-element-a5df6e6 e-flex e-con-boxed e-con e-parent"
                        data-id="a5df6e6"
                        data-element_type="container"
                        data-settings='{"background_background":"classic"}'
                      >
                        <div class="e-con-inner">
                          <div
                            class="elementor-element elementor-element-48ff802 elementor-view-stacked elementor-shape-circle elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                            data-id="48ff802"
                            data-element_type="widget"
                            data-widget_type="icon-box.default"
                          >
                            <div class="elementor-widget-container">
                              <div class="elementor-icon-box-wrapper">
                                <div class="elementor-icon-box-icon">
                                  <span class="elementor-icon elementor-animation-">
                                    <svg
                                      aria-hidden="true"
                                      class="e-font-icon-svg e-fas-dollar-sign"
                                      viewBox="0 0 288 512"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"></path>
                                    </svg>
                                  </span>
                                </div>

                                <div class="elementor-icon-box-content">
                                  <h5 class="elementor-icon-box-title">
                                    <span> Affordable Prices </span>
                                  </h5>

                                  <p class="elementor-icon-box-description">
                                    Quality gardening and landscaping services
                                    at competitive, fair rates.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="elementor-element elementor-element-b71ce76 elementor-view-stacked elementor-shape-circle elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                            data-id="b71ce76"
                            data-element_type="widget"
                            data-widget_type="icon-box.default"
                          >
                            <div class="elementor-widget-container">
                              <div class="elementor-icon-box-wrapper">
                                <div class="elementor-icon-box-icon">
                                  <span class="elementor-icon elementor-animation-">
                                    <svg
                                      aria-hidden="true"
                                      class="e-font-icon-svg e-fas-user-secret"
                                      viewBox="0 0 448 512"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M383.9 308.3l23.9-62.6c4-10.5-3.7-21.7-15-21.7h-58.5c11-18.9 17.8-40.6 17.8-64v-.3c39.2-7.8 64-19.1 64-31.7 0-13.3-27.3-25.1-70.1-33-9.2-32.8-27-65.8-40.6-82.8-9.5-11.9-25.9-15.6-39.5-8.8l-27.6 13.8c-9 4.5-19.6 4.5-28.6 0L182.1 3.4c-13.6-6.8-30-3.1-39.5 8.8-13.5 17-31.4 50-40.6 82.8-42.7 7.9-70 19.7-70 33 0 12.6 24.8 23.9 64 31.7v.3c0 23.4 6.8 45.1 17.8 64H56.3c-11.5 0-19.2 11.7-14.7 22.3l25.8 60.2C27.3 329.8 0 372.7 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-48.4-25.8-90.4-64.1-114.1zM176 480l-41.6-192 49.6 32 24 40-32 120zm96 0l-32-120 24-40 49.6-32L272 480zm41.7-298.5c-3.9 11.9-7 24.6-16.5 33.4-10.1 9.3-48 22.4-64-25-2.8-8.4-15.4-8.4-18.3 0-17 50.2-56 32.4-64 25-9.5-8.8-12.7-21.5-16.5-33.4-.8-2.5-6.3-5.7-6.3-5.8v-10.8c28.3 3.6 61 5.8 96 5.8s67.7-2.1 96-5.8v10.8c-.1.1-5.6 3.2-6.4 5.8z"></path>
                                    </svg>
                                  </span>
                                </div>

                                <div class="elementor-icon-box-content">
                                  <h5 class="elementor-icon-box-title">
                                    <span> Expert Team </span>
                                  </h5>

                                  <p class="elementor-icon-box-description">
                                    Skilled professionals dedicated to crafting
                                    stunning outdoor spaces.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="elementor-element elementor-element-85f5b26 elementor-view-stacked elementor-shape-circle elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                            data-id="85f5b26"
                            data-element_type="widget"
                            data-widget_type="icon-box.default"
                          >
                            <div class="elementor-widget-container">
                              <div class="elementor-icon-box-wrapper">
                                <div class="elementor-icon-box-icon">
                                  <span class="elementor-icon elementor-animation-">
                                    <svg
                                      aria-hidden="true"
                                      class="e-font-icon-svg e-fas-recycle"
                                      viewBox="0 0 512 512"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M184.561 261.903c3.232 13.997-12.123 24.635-24.068 17.168l-40.736-25.455-50.867 81.402C55.606 356.273 70.96 384 96.012 384H148c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12H96.115c-75.334 0-121.302-83.048-81.408-146.88l50.822-81.388-40.725-25.448c-12.081-7.547-8.966-25.961 4.879-29.158l110.237-25.45c8.611-1.988 17.201 3.381 19.189 11.99l25.452 110.237zm98.561-182.915l41.289 66.076-40.74 25.457c-12.051 7.528-9 25.953 4.879 29.158l110.237 25.45c8.672 1.999 17.215-3.438 19.189-11.99l25.45-110.237c3.197-13.844-11.99-24.719-24.068-17.168l-40.687 25.424-41.263-66.082c-37.521-60.033-125.209-60.171-162.816 0l-17.963 28.766c-3.51 5.62-1.8 13.021 3.82 16.533l33.919 21.195c5.62 3.512 13.024 1.803 16.536-3.817l17.961-28.743c12.712-20.341 41.973-19.676 54.257-.022zM497.288 301.12l-27.515-44.065c-3.511-5.623-10.916-7.334-16.538-3.821l-33.861 21.159c-5.62 3.512-7.33 10.915-3.818 16.536l27.564 44.112c13.257 21.211-2.057 48.96-27.136 48.96H320V336.02c0-14.213-17.242-21.383-27.313-11.313l-80 79.981c-6.249 6.248-6.249 16.379 0 22.627l80 79.989C302.689 517.308 320 510.3 320 495.989V448h95.88c75.274 0 121.335-82.997 81.408-146.88z"></path>
                                    </svg>
                                  </span>
                                </div>

                                <div class="elementor-icon-box-content">
                                  <h5 class="elementor-icon-box-title">
                                    <span> Sustainable Practices </span>
                                  </h5>

                                  <p class="elementor-icon-box-description">
                                    Eco-friendly solutions that enhance beauty
                                    and protect nature.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="elementor-element elementor-element-1fe2f2b elementor-view-stacked elementor-shape-circle elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                            data-id="1fe2f2b"
                            data-element_type="widget"
                            data-widget_type="icon-box.default"
                          >
                            <div class="elementor-widget-container">
                              <div class="elementor-icon-box-wrapper">
                                <div class="elementor-icon-box-icon">
                                  <span class="elementor-icon elementor-animation-">
                                    <svg
                                      aria-hidden="true"
                                      class="e-font-icon-svg e-fas-tree"
                                      viewBox="0 0 384 512"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M378.31 378.49L298.42 288h30.63c9.01 0 16.98-5 20.78-13.06 3.8-8.04 2.55-17.26-3.28-24.05L268.42 160h28.89c9.1 0 17.3-5.35 20.86-13.61 3.52-8.13 1.86-17.59-4.24-24.08L203.66 4.83c-6.03-6.45-17.28-6.45-23.32 0L70.06 122.31c-6.1 6.49-7.75 15.95-4.24 24.08C69.38 154.65 77.59 160 86.69 160h28.89l-78.14 90.91c-5.81 6.78-7.06 15.99-3.27 24.04C37.97 283 45.93 288 54.95 288h30.63L5.69 378.49c-6 6.79-7.36 16.09-3.56 24.26 3.75 8.05 12 13.25 21.01 13.25H160v24.45l-30.29 48.4c-5.32 10.64 2.42 23.16 14.31 23.16h95.96c11.89 0 19.63-12.52 14.31-23.16L224 440.45V416h136.86c9.01 0 17.26-5.2 21.01-13.25 3.8-8.17 2.44-17.47-3.56-24.26z"></path>
                                    </svg>
                                  </span>
                                </div>

                                <div class="elementor-icon-box-content">
                                  <h5 class="elementor-icon-box-title">
                                    <span> Customer Focus </span>
                                  </h5>

                                  <p class="elementor-icon-box-description">
                                    Prioritizing client satisfaction with
                                    personalized, attentive service.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="elementor-element elementor-element-e583e06 e-flex e-con-boxed e-con e-parent"
                        data-id="e583e06"
                        data-element_type="container"
                      >
                        <div class="e-con-inner">
                          <div
                            class="elementor-element elementor-element-1b604d5 e-con-full e-flex e-con e-child"
                            data-id="1b604d5"
                            data-element_type="container"
                          >
                            <div
                              class="elementor-element elementor-element-8e95596 elementor-widget elementor-widget-image"
                              data-id="8e95596"
                              data-element_type="widget"
                              data-widget_type="image.default"
                            >
                              <div class="elementor-widget-container">
                                <img
                                  fetchpriority="high"
                                  decoding="async"
                                  width="553"
                                  height="362"
                                  src={aboutUsImg[1]}
                                  class="attachment-full size-full wp-image-151"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-afd65a8 elementor-widget elementor-widget-image"
                              data-id="afd65a8"
                              data-element_type="widget"
                              data-widget_type="image.default"
                            >
                              <div class="elementor-widget-container">
                                <img
                                  decoding="async"
                                  width="295"
                                  height="300"
                                  src={aboutUsImg[0]}
                                  class="attachment-full size-full wp-image-152"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            class="elementor-element elementor-element-b800ee8 e-con-full e-flex e-con e-child"
                            data-id="b800ee8"
                            data-element_type="container"
                          >
                            <div
                              class="elementor-element elementor-element-02a1434 elementor-position-left elementor-vertical-align-middle elementor-mobile-position-left elementor-view-default elementor-widget elementor-widget-icon-box"
                              data-id="02a1434"
                              data-element_type="widget"
                              data-widget_type="icon-box.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="elementor-icon-box-wrapper">
                                  <div class="elementor-icon-box-icon">
                                    <span class="elementor-icon elementor-animation-">
                                      <svg
                                        aria-hidden="true"
                                        class="e-font-icon-svg e-fas-leaf"
                                        viewBox="0 0 576 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z"></path>
                                      </svg>
                                    </span>
                                  </div>

                                  <div class="elementor-icon-box-content">
                                    <p class="elementor-icon-box-title">
                                      <span> About us </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-ad0840b elementor-widget elementor-widget-heading"
                              data-id="ad0840b"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div class="elementor-widget-container">
                                <h2 class="elementor-heading-title elementor-size-default">
                                  {aboutUsHeading}
                                </h2>
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-7a1389f elementor-widget elementor-widget-text-editor"
                              data-id="7a1389f"
                              data-element_type="widget"
                              data-widget_type="text-editor.default"
                            >
                              <div class="elementor-widget-container">
                                {aboutUsDesc}
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-489bfc9 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                              data-id="489bfc9"
                              data-element_type="widget"
                              data-widget_type="icon-list.default"
                            >
                              <div class="elementor-widget-container">
                                <ul class="elementor-icon-list-items">
                                  <li class="elementor-icon-list-item">
                                    <span class="elementor-icon-list-icon">
                                      <svg
                                        aria-hidden="true"
                                        class="e-font-icon-svg e-fas-check-circle"
                                        viewBox="0 0 512 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                                      </svg>
                                    </span>
                                    <span class="elementor-icon-list-text">
                                      {aboutUsList[0]}
                                    </span>
                                  </li>
                                  <li class="elementor-icon-list-item">
                                    <span class="elementor-icon-list-icon">
                                      <svg
                                        aria-hidden="true"
                                        class="e-font-icon-svg e-fas-check-circle"
                                        viewBox="0 0 512 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                                      </svg>
                                    </span>
                                    <span class="elementor-icon-list-text">
                                      {aboutUsList[1]}
                                    </span>
                                  </li>
                                  <li class="elementor-icon-list-item">
                                    <span class="elementor-icon-list-icon">
                                      <svg
                                        aria-hidden="true"
                                        class="e-font-icon-svg e-fas-check-circle"
                                        viewBox="0 0 512 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                                      </svg>
                                    </span>
                                    <span class="elementor-icon-list-text">
                                      {aboutUsList[2]}
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-d08195b elementor-widget elementor-widget-button"
                              data-id="d08195b"
                              data-element_type="widget"
                              data-widget_type="button.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="elementor-button-wrapper">
                                  <a
                                    class="elementor-button elementor-button-link elementor-size-sm"
                                    href="#"
                                  >
                                    <span class="elementor-button-content-wrapper">
                                      <span class="elementor-button-icon">
                                        <svg
                                          aria-hidden="true"
                                          class="e-font-icon-svg e-fas-chevron-right"
                                          viewBox="0 0 320 512"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                                        </svg>
                                      </span>
                                      <span class="elementor-button-text">
                                        Learn More
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="elementor-element elementor-element-751c2dd e-flex e-con-boxed e-con e-parent"
                        data-id="751c2dd"
                        data-element_type="container"
                        data-settings='{"background_background":"classic"}'
                      >
                        <div class="e-con-inner">
                          <div
                            class="elementor-element elementor-element-80ca850 elementor-position-left elementor-vertical-align-middle elementor-mobile-position-left elementor-view-default elementor-widget elementor-widget-icon-box"
                            data-id="80ca850"
                            data-element_type="widget"
                            data-widget_type="icon-box.default"
                          >
                            <div class="elementor-widget-container">
                              <div class="elementor-icon-box-wrapper">
                                <div class="elementor-icon-box-icon">
                                  <span class="elementor-icon elementor-animation-">
                                    <svg
                                      aria-hidden="true"
                                      class="e-font-icon-svg e-fas-leaf"
                                      viewBox="0 0 576 512"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z"></path>
                                    </svg>
                                  </span>
                                </div>

                                <div class="elementor-icon-box-content">
                                  <p class="elementor-icon-box-title">
                                    <span> Our Services </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="elementor-element elementor-element-a8bf121 elementor-widget elementor-widget-heading"
                            data-id="a8bf121"
                            data-element_type="widget"
                            data-widget_type="heading.default"
                          >
                            <div class="elementor-widget-container">
                              <h2 class="elementor-heading-title elementor-size-default">
                                {servicesHeading}
                              </h2>
                            </div>
                          </div>
                          <div
                            class="elementor-element elementor-element-06de91d e-con-full e-grid e-con e-child"
                            data-id="06de91d"
                            data-element_type="container"
                          >
                            <div
                              class="elementor-element elementor-element-b675f89 e-con-full e-flex e-con e-child"
                              data-id="b675f89"
                              data-element_type="container"
                              data-settings='{"background_background":"classic"}'
                            >
                              <div
                                class="elementor-element elementor-element-64093cc elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                                data-id="64093cc"
                                data-element_type="widget"
                                data-widget_type="icon-box.default"
                              >
                                <div class="elementor-widget-container">
                                  <div class="elementor-icon-box-wrapper">
                                    <div class="elementor-icon-box-icon">
                                      <span class="elementor-icon elementor-animation-">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          id="Layer_1"
                                          viewBox="0 0 512 512"
                                        >
                                          <path d="m300.904 190.191c8.809-10.317 14.146-23.685 14.146-38.283 0-24.142-14.57-44.934-35.372-54.078v-65.153c0-13.055-10.621-23.677-23.677-23.677s-23.678 10.622-23.678 23.677v65.153c-20.803 9.144-35.372 29.936-35.372 54.078 0 14.598 5.336 27.966 14.146 38.284l-64.262 239.83c-.304 1.133-.317 2.324-.04 3.465l15.597 64.167c.756 3.108 3.521 5.309 6.72 5.346h.082c3.164 0 5.939-2.125 6.761-5.188l76.886-286.941c1.047.056 2.1.087 3.16.087s2.113-.031 3.16-.087l76.886 286.941c.821 3.063 3.597 5.188 6.761 5.188.027 0 .056 0 .083-.001 3.198-.037 5.964-2.237 6.72-5.346l15.597-64.167c.277-1.141.264-2.332-.04-3.465zm-54.581-157.514c0-5.336 4.341-9.677 9.678-9.677 5.336 0 9.677 4.341 9.677 9.677v60.988c-3.151-.522-6.381-.806-9.677-.806-3.297 0-6.527.285-9.678.806zm-76.8 435.044-8.702-35.805 61.956-231.223c4.924 3.364 10.382 5.997 16.218 7.756zm41.428-315.813c0-24.84 20.209-45.049 45.05-45.049 24.84 0 45.049 20.209 45.049 45.049s-20.209 45.049-45.049 45.049c-24.841 0-45.05-20.209-45.05-45.049zm131.528 315.813-69.473-259.271c5.835-1.758 11.293-4.392 16.218-7.756l61.957 231.223zm-306.314-155.585c1.038 3.724-1.14 7.584-4.863 8.623-4.425 1.233-8.869 2.548-13.209 3.906-.696.219-1.401.322-2.094.322-2.979 0-5.741-1.917-6.678-4.91-1.155-3.689.898-7.617 4.588-8.771 4.48-1.403 9.066-2.76 13.633-4.033 3.727-1.038 7.584 1.139 8.623 4.863zm54.821-11.306c.636 3.813-1.939 7.42-5.753 8.056-4.551.759-9.13 1.58-13.609 2.44-.446.086-.891.127-1.328.127-3.29 0-6.223-2.33-6.866-5.681-.729-3.797 1.757-7.466 5.554-8.194 4.592-.882 9.284-1.724 13.947-2.501 3.809-.64 7.42 1.939 8.055 5.753zm49.229 1.373c-4.604.366-9.248.782-13.806 1.236-.236.024-.472.035-.704.035-3.553 0-6.596-2.694-6.956-6.305-.385-3.847 2.423-7.276 6.27-7.66 4.651-.465 9.391-.889 14.087-1.262 3.863-.326 7.227 2.569 7.532 6.423.306 3.855-2.57 7.227-6.423 7.533zm357.303 99.141c0 37.375-43.18 71.233-118.468 92.892-.646.187-1.299.275-1.938.275-3.042 0-5.841-1.998-6.724-5.066-1.069-3.716 1.076-7.594 4.791-8.662 67.839-19.517 108.339-49.213 108.339-79.438 0-33.78-50.314-66.504-131.309-85.399-3.766-.878-6.105-4.642-5.227-8.406.878-3.766 4.646-6.105 8.406-5.227 41.814 9.755 76.88 23.471 101.406 39.666 26.642 17.59 40.724 38.118 40.724 59.365zm-331.431-313.801c0-43.309-35.234-78.543-78.543-78.543s-78.543 35.234-78.543 78.543c0 36.775 25.931 68.651 61.26 76.615l-3.322 112.798c-.056 1.892.657 3.725 1.975 5.082s3.13 2.124 5.022 2.124h27.217c1.893 0 3.704-.767 5.022-2.124 1.317-1.357 2.03-3.19 1.975-5.082l-3.324-112.798c35.33-7.963 61.261-39.84 61.261-76.615zm-143.086 0c0-35.589 28.954-64.543 64.543-64.543s64.543 28.954 64.543 64.542c0 29.295-20.019 54.805-47.683 62.301l-.133-4.533 24.584-26.874c2.527-2.763 2.433-7.026-.216-9.674l-10.593-10.592c-2.647-2.649-6.912-2.743-9.674-.215l-5.925 5.419-.42-9.453c-.167-3.741-3.248-6.689-6.993-6.689h-14.98c-3.745 0-6.826 2.948-6.993 6.688l-.421 9.454-5.924-5.419c-2.764-2.529-7.027-2.434-9.674.215l-10.593 10.593c-2.648 2.648-2.743 6.911-.216 9.674l24.583 26.874-.134 4.533c-27.663-7.497-47.681-33.006-47.681-62.301zm58.144 182.619 3.749-127.276c.054-1.819-.604-3.588-1.832-4.931l-21.979-24.028 1.125-1.124 12.035 11.01c2.006 1.834 4.893 2.341 7.403 1.302 2.512-1.04 4.193-3.44 4.314-6.156l.789-17.728h1.59l.788 17.728c.121 2.715 1.803 5.116 4.314 6.156s5.397.533 7.403-1.302l12.036-11.01 1.125 1.125-21.98 24.028c-1.229 1.343-1.886 3.111-1.832 4.931l3.75 127.276h-12.798zm326.031-106.004-3.323 112.798c-.056 1.892.657 3.725 1.975 5.082s3.13 2.124 5.022 2.124h27.217c1.893 0 3.704-.767 5.022-2.124 1.317-1.357 2.03-3.19 1.975-5.082l-3.324-112.798c35.33-7.963 61.261-39.84 61.261-76.615 0-43.309-35.234-78.543-78.543-78.543s-78.543 35.234-78.543 78.542c0 36.776 25.931 68.653 61.261 76.616zm10.883 106.004 3.75-127.276c.054-1.819-.604-3.588-1.832-4.931l-21.98-24.028 1.125-1.124 12.035 11.01c2.006 1.834 4.893 2.341 7.403 1.302 2.512-1.04 4.193-3.44 4.314-6.156l.789-17.728h1.59l.789 17.728c.121 2.716 1.803 5.116 4.314 6.156 2.51 1.04 5.397.533 7.403-1.302l12.035-11.01 1.125 1.124-21.98 24.028c-1.229 1.343-1.886 3.111-1.832 4.931l3.75 127.276zm6.399-247.162c35.589 0 64.543 28.954 64.543 64.542 0 29.296-20.019 54.805-47.683 62.301l-.133-4.533 24.584-26.874c2.527-2.763 2.433-7.026-.216-9.674l-10.593-10.592c-2.647-2.649-6.912-2.743-9.674-.215l-5.924 5.419-.421-9.454c-.167-3.741-3.248-6.688-6.993-6.688h-14.98c-3.745 0-6.826 2.948-6.993 6.688l-.421 9.454-5.924-5.419c-2.764-2.529-7.027-2.434-9.674.215l-10.593 10.593c-2.648 2.648-2.743 6.911-.216 9.674l24.584 26.874-.134 4.533c-27.665-7.496-47.683-33.005-47.683-62.301.001-35.589 28.955-64.543 64.544-64.543z"></path>
                                        </svg>
                                      </span>
                                    </div>

                                    <div class="elementor-icon-box-content">
                                      <h5 class="elementor-icon-box-title">
                                        <span> {services[0][0]} </span>
                                      </h5>

                                      <p class="elementor-icon-box-description">
                                        {services[0][1]}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="elementor-element elementor-element-3a89d96 elementor-widget elementor-widget-image"
                                data-id="3a89d96"
                                data-element_type="widget"
                                data-widget_type="image.default"
                              >
                                <div class="elementor-widget-container">
                                  <img
                                    decoding="async"
                                    width="440"
                                    height="280"
                                    src={servicesImg[0]}
                                    class="attachment-full size-full wp-image-930"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-18e5f5e e-con-full e-flex e-con e-child"
                              data-id="18e5f5e"
                              data-element_type="container"
                              data-settings='{"background_background":"classic"}'
                            >
                              <div
                                class="elementor-element elementor-element-a6fc8f3 elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                                data-id="a6fc8f3"
                                data-element_type="widget"
                                data-widget_type="icon-box.default"
                              >
                                <div class="elementor-widget-container">
                                  <div class="elementor-icon-box-wrapper">
                                    <div class="elementor-icon-box-icon">
                                      <span class="elementor-icon elementor-animation-">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          id="Layer_1"
                                          height="512"
                                          viewBox="0 0 68 68"
                                          width="512"
                                        >
                                          <g>
                                            <path d="m12.7 6.5c0 3 2.5 5.5 5.5 5.5s5.5-2.5 5.5-5.5c0-.2 0-.3 0-.5h2.6c.6 0 1-.4 1-1s-.4-1-1-1h-3.2c-.9-1.8-2.8-3-4.9-3-3.1 0-5.5 2.5-5.5 5.5zm9 0c0 1.9-1.6 3.5-3.5 3.5-2 0-3.7-1.7-3.4-3.9h6.9c-.1.1 0 .2 0 .4zm-1.1-2.5h-4.9c.6-.6 1.5-1 2.5-1 .9 0 1.8.4 2.4 1z"></path>
                                            <path d="m66.2 57.8-5-5c-.2-.2-.4-.3-.7-.3h-6.1v-2.2h2.3c.6 0 1-.4 1-1 0-2.8-2.3-5-5-5h-4.8c-2.8 0-5 2.3-5 5 0 .6.4 1 1 1h2.3v2.2h-4.7l-4.2-14.7c-.1-.3-.3-.5-.5-.6l-1.6-.9c.1-1.2-.6-2.2-1.6-2.7l-9.6-4.9v-7.5c0-3.7-3-6.7-6.7-6.7s-6.7 3-6.7 6.7c0 15.7-.2 16 .4 17.7l2 9.8-10.2 8.2c-1.4 1.1-1.7 3.3-.6 4.7l3.1 4c1.2 1.5 3.3 1.7 4.7.6 1.5-1.2 1.7-3.3.6-4.7l-1.1-1.4 3.3-2.6-.7 4.9c-.1 1 .2 1.9.8 2.7.6.7 1.6 1.2 2.5 1.2h5.2c1.9 0 3.4-1.5 3.4-3.4s-1.5-3.4-3.4-3.4h-1.3c1.1-7.7 1.1-7.4 1-8l4.7-3.8c2.5-2 .8-4.5-.5-7.7-.4-.9-.6-2-.6-3.3v-1.5l6.9 3.5c1.1.6 2.5.3 3.4-.6l1.1.6 3.9 13.7h-2.5c-1.6 0-2.9 1.3-2.9 2.9v4.5c0 1.6 1.3 2.9 2.9 2.9h.4c.5 2.4 2.6 4.2 5.1 4.2s4.6-1.8 5.1-4.2h5.7c.5 2.4 2.6 4.2 5.1 4.2s4.6-1.8 5.1-4.2h1c1.3 0 2.3-1 2.3-2.3v-2c0-.2-.1-.4-.3-.6zm-52.4-15.4c1 .7 2.3 1 3.6 1 .4 0 .9 0 1.3-.1l.3.7-4.2 3.3zm3.8 18.8c.2.2.5.3.8.3h2.5c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4h-5.2c-.4 0-.8-.2-1-.5-.3-.3-.4-.7-.3-1.1l1-7 3.1-2.5-1 7.2c-.2.3-.1.6.1.8zm14.3-24.2-10.5-5.3c-.1-.1-.3-.2-.4-.3l-4.5-7.2c-.3-.5-.9-.6-1.4-.3s-.6.9-.3 1.4l4.5 7.2c.3.5.7.8 1.2 1.1l1.6.8v2.6c0 1.6.2 2.9.7 4.1 1.5 3.7 2.2 4.5 1.1 5.3-2 1.6-14.8 11.8-16.4 13-.4.3-.5 1-.2 1.4l1.7 2.2c.5.6.4 1.5-.3 1.9-.6.4-1.5.3-1.9-.3l-3.1-4c-.3-.8-.2-1.6.3-2.1 18-14.3 17.5-13.5 17.1-14.5l-.9-2.2c-.2-.5-.8-.7-1.3-.6-.5.2-1 .3-1.6.3-2 0-3.8-1.3-4.4-3.1-.4-2.2-.3 1-.3-17.1 0-2.6 2.1-4.7 4.7-4.7s4.7 2.1 4.7 4.7v4.5l-2.2-3.6c-.3-.5-.9-.6-1.4-.3s-.6.9-.3 1.4l4.2 6.8c.1.2.2.3.4.4l10 5.1c.4.2.6.8.4 1.2-.2.2-.7.4-1.2.2zm16 9.3h4.8c1.3 0 2.4.8 2.8 2h-2.1-6.2-2.2c.4-1.2 1.6-2 2.9-2zm.3 4h4.2v2.2h-4.2zm-5.8 14.7c-1.8 0-3.2-1.4-3.2-3.2s1.4-3.2 3.2-3.2 3.2 1.4 3.2 3.2-1.4 3.2-3.2 3.2zm15.7 0c-1.8 0-3.2-1.4-3.2-3.2s1.4-3.2 3.2-3.2 3.2 1.4 3.2 3.2-1.4 3.2-3.2 3.2zm6.4-4.6c0 .2-.1.3-.3.3h-1c-.5-2.4-2.6-4.1-5.1-4.1s-4.6 1.8-5.1 4.1h-5.5c-.5-2.4-2.6-4.1-5.1-4.1s-4.6 1.8-5.1 4.1h-.4c-.5 0-.9-.4-.9-.9v-4.5c0-.5.4-.9.9-.9h10.2 6.2 6.7l4.4 4.4v1.6z"></path>
                                          </g>
                                        </svg>
                                      </span>
                                    </div>

                                    <div class="elementor-icon-box-content">
                                      <h5 class="elementor-icon-box-title">
                                        <span> {services[1][0]} </span>
                                      </h5>

                                      <p class="elementor-icon-box-description">
                                        {services[1][1]}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="elementor-element elementor-element-ed47f8a elementor-widget elementor-widget-image"
                                data-id="ed47f8a"
                                data-element_type="widget"
                                data-widget_type="image.default"
                              >
                                <div class="elementor-widget-container">
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    width="440"
                                    height="280"
                                    src={servicesImg[1]}
                                    class="attachment-full size-full wp-image-864"
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-473e9a2 e-con-full e-flex e-con e-child"
                              data-id="473e9a2"
                              data-element_type="container"
                              data-settings='{"background_background":"classic"}'
                            >
                              <div
                                class="elementor-element elementor-element-903a6d2 elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                                data-id="903a6d2"
                                data-element_type="widget"
                                data-widget_type="icon-box.default"
                              >
                                <div class="elementor-widget-container">
                                  <div class="elementor-icon-box-wrapper">
                                    <div class="elementor-icon-box-icon">
                                      <span class="elementor-icon elementor-animation-">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 550 550"
                                        >
                                          <g id="_x31_7679_-_Bench">
                                            <g id="XMLID_308_">
                                              <g id="XMLID_296_">
                                                <path d="m394.991 453.821h-366.784c-4.418 0-8-3.582-8-8v-39.867c0-4.418 3.582-8 8-8h366.785c4.418 0 8 3.582 8 8v39.867c-.001 4.418-3.583 8-8.001 8zm-358.784-16h350.785v-23.867h-350.785z"></path>
                                              </g>
                                              <g id="XMLID_307_">
                                                <path d="m91 375h-40c-4.418 0-8-3.582-8-8v-96c0-4.418 3.582-8 8-8h40c4.418 0 8 3.582 8 8s-3.582 8-8 8h-32v80h32c4.418 0 8 3.582 8 8s-3.582 8-8 8z"></path>
                                              </g>
                                              <g id="XMLID_299_">
                                                <path d="m371 311h-320c-4.418 0-8-3.582-8-8s3.582-8 8-8h320c4.418 0 8 3.582 8 8s-3.582 8-8 8z"></path>
                                              </g>
                                              <g id="XMLID_298_">
                                                <path d="m371 343h-320c-4.418 0-8-3.582-8-8s3.582-8 8-8h320c4.418 0 8 3.582 8 8s-3.582 8-8 8z"></path>
                                              </g>
                                              <g id="XMLID_301_">
                                                <g id="XMLID_300_">
                                                  <path d="m103.956 509.637h-31.894c-4.418 0-8-3.582-8-8v-55.815c0-4.418 3.582-8 8-8h31.894c4.418 0 8 3.582 8 8v55.815c0 4.418-3.582 8-8 8zm-23.894-16h15.894v-39.815h-15.894z"></path>
                                                </g>
                                                <g id="XMLID_302_">
                                                  <path d="m351.137 509.637h-31.895c-4.418 0-8-3.582-8-8v-55.815c0-4.418 3.582-8 8-8h31.895c4.418 0 8 3.582 8 8v55.815c0 4.418-3.582 8-8 8zm-23.895-16h15.895v-39.815h-15.895z"></path>
                                                </g>
                                              </g>
                                              <g id="XMLID_306_">
                                                <path d="m371 375h-280c-4.418 0-8-3.582-8-8s3.582-8 8-8h272v-80h-272c-4.418 0-8-3.582-8-8s3.582-8 8-8h280c4.418 0 8 3.582 8 8v96c0 4.418-3.582 8-8 8z"></path>
                                              </g>
                                              <g id="XMLID_311_">
                                                <path d="m123 279h-32c-4.418 0-8-3.582-8-8v-32c0-4.418 3.582-8 8-8h32c4.418 0 8 3.582 8 8v32c0 4.418-3.582 8-8 8zm-24-16h16v-16h-16z"></path>
                                              </g>
                                              <g id="XMLID_406_">
                                                <path d="m123 414c-4.418 0-8-3.582-8-8v-31h-16v31c0 4.418-3.582 8-8 8s-8-3.582-8-8v-39c0-4.418 3.582-8 8-8h32c4.418 0 8 3.582 8 8v39c0 4.418-3.582 8-8 8z"></path>
                                              </g>
                                              <g id="XMLID_304_">
                                                <path d="m331 279h-32c-4.418 0-8-3.582-8-8v-32c0-4.418 3.582-8 8-8h32c4.418 0 8 3.582 8 8v32c0 4.418-3.582 8-8 8zm-24-16h16v-16h-16z"></path>
                                              </g>
                                              <g id="XMLID_491_">
                                                <path d="m331 414c-4.418 0-8-3.582-8-8v-31h-16v31c0 4.418-3.582 8-8 8s-8-3.582-8-8v-39c0-4.418 3.582-8 8-8h32c4.418 0 8 3.582 8 8v39c0 4.418-3.582 8-8 8z"></path>
                                              </g>
                                              <g id="XMLID_305_">
                                                <path d="m522 511h-495c-4.418 0-8-3.582-8-8s3.582-8 8-8h495c4.418 0 8 3.582 8 8s-3.582 8-8 8z"></path>
                                              </g>
                                              <g id="XMLID_314_">
                                                <path d="m465.638 254.599c-10.631 0-20.995-2.919-30.28-8.487-9.286 5.568-19.65 8.487-30.281 8.487-35.385 0-64.173-32.204-64.173-71.789 0-20.789 7.835-40.13 21.638-53.764-.38-3.354-.572-6.71-.572-10.025 0-43.981 31.938-79.762 71.194-79.762s71.194 35.781 71.194 79.762c0 2.083-.078 4.204-.232 6.34 16.164 13.533 25.686 34.654 25.686 57.449-.001 39.585-28.79 71.789-64.174 71.789zm-30.281-26.074c1.653 0 3.307.511 4.711 1.534 7.669 5.587 16.511 8.541 25.569 8.541 26.563 0 48.173-25.027 48.173-55.789 0-19.361-8.507-37.066-22.756-47.36-2.362-1.707-3.61-4.563-3.257-7.456.371-3.035.56-6.054.56-8.973 0-35.159-24.76-63.762-55.194-63.762s-55.194 28.604-55.194 63.762c0 3.884.323 7.848.961 11.782.443 2.737-.563 5.508-2.657 7.325-12.31 10.669-19.369 26.955-19.369 44.682 0 30.762 21.61 55.789 48.173 55.789 9.059 0 17.9-2.953 25.571-8.541 1.403-1.023 3.056-1.534 4.709-1.534z"></path>
                                              </g>
                                              <g id="XMLID_317_">
                                                <path d="m421 511c-4.418 0-8-3.582-8-8v-259c0-4.418 3.582-8 8-8s8 3.582 8 8v259c0 4.418-3.582 8-8 8z"></path>
                                              </g>
                                              <g id="XMLID_316_">
                                                <path d="m453 511c-4.418 0-8-3.582-8-8v-258c0-4.418 3.582-8 8-8s8 3.582 8 8v258c0 4.418-3.582 8-8 8z"></path>
                                              </g>
                                              <g id="XMLID_297_">
                                                <path d="m68.075 134.996c-26.395 0-47.868-21.474-47.868-47.868s21.473-47.868 47.868-47.868 47.868 21.473 47.868 47.868-21.474 47.868-47.868 47.868zm0-79.736c-17.572 0-31.868 14.296-31.868 31.868s14.296 31.868 31.868 31.868 31.868-14.296 31.868-31.868c-.001-17.572-14.297-31.868-31.868-31.868z"></path>
                                              </g>
                                            </g>
                                          </g>
                                          <g id="Layer_1"></g>
                                        </svg>
                                      </span>
                                    </div>

                                    <div class="elementor-icon-box-content">
                                      <h5 class="elementor-icon-box-title">
                                        <span> {services[2][0]} </span>
                                      </h5>

                                      <p class="elementor-icon-box-description">
                                        {services[2][1]}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="elementor-element elementor-element-93f2848 elementor-widget elementor-widget-image"
                                data-id="93f2848"
                                data-element_type="widget"
                                data-widget_type="image.default"
                              >
                                <div class="elementor-widget-container">
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    width="440"
                                    height="248"
                                    src={servicesImg[2]}
                                    class="attachment-full size-full wp-image-865"
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-a65f806 e-con-full e-flex e-con e-child"
                              data-id="a65f806"
                              data-element_type="container"
                              data-settings='{"background_background":"classic"}'
                            >
                              <div
                                class="elementor-element elementor-element-063d529 elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                                data-id="063d529"
                                data-element_type="widget"
                                data-widget_type="icon-box.default"
                              >
                                <div class="elementor-widget-container">
                                  <div class="elementor-icon-box-wrapper">
                                    <div class="elementor-icon-box-icon">
                                      <span class="elementor-icon elementor-animation-">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          id="Capa_1"
                                          height="512"
                                          viewBox="0 0 512 512"
                                          width="512"
                                        >
                                          <g>
                                            <g id="Page-1_95_">
                                              <g id="_x30_96---Sun-Lamps">
                                                <path
                                                  id="Shape_196_"
                                                  d="m495.093 478.131c-8.194-10.892-21.024-17.309-34.654-17.331-4.057-.005-8.058-.948-11.691-2.756l-2.475-1.246c-6.003-2.95-12.597-4.499-19.285-4.531h-17.408v-20.309c8.86 7.6 20.148 11.777 31.821 11.776 14.644-.085 28.653-5.985 38.946-16.401 14.037-14.037 20.258-48.845 23.04-75.563.554-5.146-1.257-10.265-4.924-13.918-3.671-3.633-8.771-5.438-13.909-4.924-26.726 2.748-61.534 8.969-75.571 23.04-3.007 2.977-5.669 6.283-7.936 9.856-2.269-3.615-4.934-6.967-7.945-9.993-10.199-8.368-22.39-13.953-35.388-16.213.193-1.673.373-3.317.538-4.932.543-5.143-1.265-10.256-4.921-13.914s-8.769-5.469-13.912-4.927c-26.726 2.748-61.534 8.969-75.571 23.04-2.988 3.004-5.627 6.336-7.868 9.933-2.248-3.616-4.899-6.965-7.902-9.984-14.037-14.037-48.845-20.258-75.563-23.04-5.143-.543-10.256 1.265-13.914 4.921s-5.469 8.769-4.927 13.912c.162 1.613.341 3.268.538 4.941-13.016 2.269-25.221 7.876-35.422 16.273-2.996 3.027-5.638 6.385-7.876 10.01-2.247-3.602-4.892-6.939-7.885-9.95-14.037-14.037-48.845-20.258-75.563-23.04-5.143-.543-10.256 1.265-13.914 4.921s-5.469 8.769-4.927 13.912c2.748 26.726 8.969 61.534 23.04 75.571 10.269 10.429 24.259 16.353 38.895 16.469 11.673.001 22.961-4.176 31.821-11.776v20.309h-17.408c-6.723.037-13.349 1.601-19.379 4.574l-2.347 1.186c-3.642 1.818-7.655 2.767-11.725 2.773-13.62.02-26.442 6.426-34.637 17.306l-4.958 6.588c-3.879 5.172-4.503 12.091-1.612 17.872 2.891 5.782 8.801 9.434 15.265 9.434h460.8c6.464 0 12.374-3.652 15.265-9.434s2.267-12.701-1.612-17.872zm-119.987-25.864c-6.723.037-13.349 1.601-19.379 4.574l-2.347 1.186c-3.642 1.818-7.655 2.767-11.725 2.773-4.378.07-8.718.816-12.868 2.21-4.323-1.442-8.848-2.188-13.406-2.21-4.082-.005-8.107-.957-11.759-2.782l-2.347-1.178c-6.021-2.997-12.653-4.562-19.379-4.574h-17.382v-37.376c8.86 7.6 20.148 11.777 31.821 11.776 7.227-.021 14.376-1.489 21.026-4.318 9.061 11.599 22.333 19.154 36.932 21.026 2.11.254 4.232.383 6.357.384 11.701-.005 23.011-4.218 31.863-11.87v20.378h-17.407zm45.91-84.301c7.945-7.953 32.35-14.72 65.357-17.988-3.413 32.905-10.138 57.31-18.091 65.254-6.779 6.91-15.929 10.988-25.6 11.409-8.934.541-17.67-2.781-23.987-9.122-6.269-6.363-9.576-15.067-9.114-23.987.436-9.663 4.523-18.8 11.435-25.566zm-39.911 0c7.213 7.057 11.319 16.696 11.409 26.786.091 8.498-3.218 16.679-9.19 22.724-7.14 6.966-17.088 10.258-26.974 8.926-9.466-1.246-18.139-5.944-24.354-13.193 1.118-.956 2.227-1.92 3.285-2.978 10.394-10.394 16.495-32.179 20.079-53.632 9.382 1.606 18.224 5.498 25.745 11.332zm-105.156-17.067c7.945-7.953 32.35-14.72 65.357-17.988-3.413 32.905-10.138 57.31-18.091 65.254-6.779 6.91-15.929 10.988-25.6 11.409-8.93.511-17.654-2.807-23.987-9.122-6.269-6.363-9.576-15.067-9.114-23.987.436-9.662 4.523-18.8 11.435-25.566zm-39.936 0c6.91 6.779 10.988 15.929 11.409 25.6.46 8.922-2.85 17.626-9.122 23.987-6.331 6.318-15.058 9.633-23.987 9.114-9.671-.421-18.821-4.499-25.6-11.409-7.953-7.945-14.72-32.35-17.988-65.357 32.938 3.379 57.343 10.112 65.288 18.065zm-105.191 17.067c7.524-5.857 16.38-9.762 25.779-11.366 3.584 21.453 9.685 43.238 20.079 53.632 1.058 1.058 2.167 2.022 3.285 2.978-6.215 7.248-14.888 11.946-24.354 13.193-9.885 1.321-19.829-1.969-26.974-8.926-12.999-14.301-12.024-36.412 2.185-49.511zm-37.546 49.553c-6.328 6.353-15.079 9.684-24.03 9.148-9.671-.421-18.821-4.499-25.6-11.409-7.919-7.97-14.652-32.375-17.954-65.391 32.905 3.413 57.31 10.138 65.254 18.091 6.91 6.779 10.988 15.929 11.409 25.6.453 8.913-2.857 17.606-9.122 23.962h.043zm26.172 14.37c8.856 7.642 20.165 11.846 31.863 11.844 2.125-.001 4.248-.13 6.357-.384 14.599-1.872 27.871-9.427 36.932-21.026 6.648 2.837 13.798 4.314 21.026 4.343 11.673.001 22.961-4.176 31.821-11.776v37.376h-17.382c-6.714.009-13.335 1.572-19.345 4.565l-2.415 1.195c-3.64 1.821-7.654 2.771-11.725 2.773-4.557.022-9.083.768-13.406 2.21-4.15-1.395-8.491-2.14-12.868-2.21-4.057-.005-8.058-.948-11.691-2.756l-2.475-1.246c-6.003-2.95-12.597-4.499-19.285-4.531h-17.408v-20.377zm-93.867 63.044 4.966-6.596c4.962-6.588 12.728-10.464 20.975-10.47 6.725-.016 13.356-1.581 19.379-4.574l2.287-1.161c3.66-1.828 7.693-2.786 11.785-2.799h51.883c4.057.008 8.057.952 11.691 2.756l2.415 1.22c3.738 1.827 7.718 3.112 11.819 3.814-.273.341-.589.649-.853.998l-4.924 6.571c-2.188 2.961-3.342 6.559-3.285 10.24h-128.138zm290.133 0h-145.066l4.915-6.579c4.977-6.594 12.756-10.476 21.018-10.487 6.714-.009 13.335-1.572 19.345-4.565l2.415-1.195c3.64-1.821 7.654-2.771 11.725-2.773h51.831c4.082.005 8.107.957 11.759 2.782l2.347 1.178c6.021 2.997 12.653 4.562 19.379 4.574 8.251.018 16.017 3.899 20.983 10.487l4.949 6.579h-25.6zm42.522 0c.059-3.68-1.092-7.278-3.277-10.24l-4.932-6.579c-.264-.35-.58-.657-.853-.998 4.113-.707 8.104-1.997 11.853-3.831l2.287-1.161c3.664-1.826 7.7-2.781 11.793-2.79h51.883c4.057.008 8.057.952 11.691 2.756l2.415 1.22c6.013 2.983 12.633 4.542 19.345 4.557 8.261.01 16.038 3.9 21.001 10.505l4.941 6.562h-128.147z"
                                                ></path>
                                                <path
                                                  id="Shape_195_"
                                                  d="m383.981 153.6v-27.068c.019-6.793-2.682-13.311-7.501-18.099l-49.732-49.732c-4.79-4.816-11.307-7.516-18.099-7.501h-10.001v-25.6c0-14.138-11.462-25.6-25.6-25.6h-34.133c-14.139 0-25.6 11.462-25.6 25.6v25.6h-10.001c-6.792-.016-13.309 2.685-18.099 7.501l-49.732 49.732c-4.816 4.79-7.516 11.307-7.501 18.099v27.068c0 9.426 7.641 17.067 17.067 17.067h43.255c4.275 34.124 33.287 59.728 67.678 59.728s63.403-25.604 67.678-59.728h43.255c9.425 0 17.066-7.641 17.066-17.067zm-153.6-128c0-4.713 3.821-8.533 8.533-8.533h34.133c4.713 0 8.533 3.821 8.533 8.533v25.6h-51.2v-25.6zm25.6 187.733c-24.957-.046-46.252-18.062-50.432-42.667h100.864c-4.18 24.605-25.475 42.621-50.432 42.667zm-110.933-59.733v-27.068c0-2.263.9-4.433 2.5-6.033l49.732-49.732c1.6-1.6 3.77-2.5 6.033-2.5h105.335c2.263 0 4.433.9 6.033 2.5l49.732 49.732c1.6 1.6 2.5 3.77 2.5 6.033v27.068z"
                                                ></path>
                                                <g
                                                  clip-rule="evenodd"
                                                  fill-rule="evenodd"
                                                >
                                                  <path
                                                    id="Path_183_"
                                                    d="m247.448 256v25.6c0 4.713 3.821 8.533 8.533 8.533 4.713 0 8.533-3.821 8.533-8.533v-25.6c0-4.713-3.821-8.533-8.533-8.533-4.713 0-8.533 3.82-8.533 8.533z"
                                                  ></path>
                                                  <path
                                                    id="Path_182_"
                                                    d="m298.648 236.032c-4.081 2.356-5.479 7.575-3.123 11.657l12.8 22.187c2.372 4.047 7.566 5.42 11.628 3.074 4.062-2.345 5.47-7.53 3.151-11.608l-12.8-22.187c-2.356-4.081-7.575-5.479-11.656-3.123z"
                                                  ></path>
                                                  <path
                                                    id="Path_181_"
                                                    d="m201.658 239.155-12.8 22.187c-1.549 2.642-1.563 5.911-.038 8.566s4.356 4.29 7.418 4.283 5.886-1.654 7.399-4.316l12.8-22.187c2.318-4.078.911-9.262-3.151-11.608-4.062-2.345-9.256-.971-11.628 3.075z"
                                                  ></path>
                                                  <path
                                                    id="Path_180_"
                                                    d="m170.426 201.677-22.187 12.8c-2.662 1.513-4.309 4.337-4.316 7.399s1.628 5.893 4.283 7.418 5.924 1.511 8.566-.038l22.187-12.8c2.662-1.513 4.309-4.337 4.316-7.399s-1.628-5.893-4.283-7.418c-2.656-1.525-5.925-1.511-8.566.038z"
                                                  ></path>
                                                  <path
                                                    id="Path_179_"
                                                    d="m363.706 214.477-22.187-12.8c-2.642-1.549-5.911-1.563-8.566-.038s-4.29 4.356-4.283 7.418 1.654 5.886 4.316 7.399l22.187 12.8c2.642 1.549 5.911 1.563 8.566.038s4.29-4.356 4.283-7.418-1.654-5.886-4.316-7.399z"
                                                  ></path>
                                                </g>
                                              </g>
                                            </g>
                                          </g>
                                        </svg>
                                      </span>
                                    </div>

                                    <div class="elementor-icon-box-content">
                                      <h5 class="elementor-icon-box-title">
                                        <span>{services[3][0]}</span>
                                      </h5>

                                      <p class="elementor-icon-box-description">
                                        {services[3][1]}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="elementor-element elementor-element-d35b00e elementor-widget elementor-widget-image"
                                data-id="d35b00e"
                                data-element_type="widget"
                                data-widget_type="image.default"
                              >
                                <div class="elementor-widget-container">
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    width="440"
                                    height="293"
                                    src={servicesImg[3]}
                                    class="attachment-full size-full wp-image-866"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="elementor-element elementor-element-38f0272 elementor-align-center elementor-widget elementor-widget-button"
                            data-id="38f0272"
                            data-element_type="widget"
                            data-widget_type="button.default"
                          >
                            <div class="elementor-widget-container">
                              <div class="elementor-button-wrapper">
                                <a
                                  class="elementor-button elementor-button-link elementor-size-sm"
                                  href="#"
                                >
                                  <span class="elementor-button-content-wrapper">
                                    <span class="elementor-button-icon">
                                      <svg
                                        aria-hidden="true"
                                        class="e-font-icon-svg e-fas-chevron-right"
                                        viewBox="0 0 320 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                                      </svg>
                                    </span>
                                    <span class="elementor-button-text">
                                      Explore Our Services
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="elementor-element elementor-element-ebdb668 e-flex e-con-boxed e-con e-parent"
                        data-id="ebdb668"
                        data-element_type="container"
                        data-settings='{"background_background":"classic"}'
                      >
                        <div class="e-con-inner">
                          <div
                            class="elementor-element elementor-element-bc40ce0 e-con-full e-flex e-con e-child"
                            data-id="bc40ce0"
                            data-element_type="container"
                          >
                            <div
                              class="elementor-element elementor-element-8f2abce elementor-position-left elementor-vertical-align-middle elementor-mobile-position-left elementor-view-default elementor-widget elementor-widget-icon-box"
                              data-id="8f2abce"
                              data-element_type="widget"
                              data-widget_type="icon-box.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="elementor-icon-box-wrapper">
                                  <div class="elementor-icon-box-icon">
                                    <span class="elementor-icon elementor-animation-">
                                      <svg
                                        aria-hidden="true"
                                        class="e-font-icon-svg e-fas-leaf"
                                        viewBox="0 0 576 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z"></path>
                                      </svg>
                                    </span>
                                  </div>

                                  <div class="elementor-icon-box-content">
                                    <p class="elementor-icon-box-title">
                                      <span> Why Us </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-346d282 elementor-widget elementor-widget-heading"
                              data-id="346d282"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div class="elementor-widget-container">
                                <h2 class="elementor-heading-title elementor-size-default">
                                  {whyUsHeading}
                                </h2>
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-624cef0 elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                              data-id="624cef0"
                              data-element_type="widget"
                              data-widget_type="icon-box.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="elementor-icon-box-wrapper">
                                  <div class="elementor-icon-box-icon">
                                    <span class="elementor-icon elementor-animation-">
                                      <svg
                                        aria-hidden="true"
                                        class="e-font-icon-svg e-fas-star-of-life"
                                        viewBox="0 0 480 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M471.99 334.43L336.06 256l135.93-78.43c7.66-4.42 10.28-14.2 5.86-21.86l-32.02-55.43c-4.42-7.65-14.21-10.28-21.87-5.86l-135.93 78.43V16c0-8.84-7.17-16-16.01-16h-64.04c-8.84 0-16.01 7.16-16.01 16v156.86L56.04 94.43c-7.66-4.42-17.45-1.79-21.87 5.86L2.15 155.71c-4.42 7.65-1.8 17.44 5.86 21.86L143.94 256 8.01 334.43c-7.66 4.42-10.28 14.21-5.86 21.86l32.02 55.43c4.42 7.65 14.21 10.27 21.87 5.86l135.93-78.43V496c0 8.84 7.17 16 16.01 16h64.04c8.84 0 16.01-7.16 16.01-16V339.14l135.93 78.43c7.66 4.42 17.45 1.8 21.87-5.86l32.02-55.43c4.42-7.65 1.8-17.43-5.86-21.85z"></path>
                                      </svg>
                                    </span>
                                  </div>

                                  <div class="elementor-icon-box-content">
                                    <h5 class="elementor-icon-box-title">
                                      <span> {whyUs[0][0]} </span>
                                    </h5>

                                    <p class="elementor-icon-box-description">
                                      {whyUs[0][1]}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-245b142 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                              data-id="245b142"
                              data-element_type="widget"
                              data-widget_type="divider.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="elementor-divider">
                                  <span class="elementor-divider-separator"></span>
                                </div>
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-09fdde9 elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                              data-id="09fdde9"
                              data-element_type="widget"
                              data-widget_type="icon-box.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="elementor-icon-box-wrapper">
                                  <div class="elementor-icon-box-icon">
                                    <span class="elementor-icon elementor-animation-">
                                      <svg
                                        aria-hidden="true"
                                        class="e-font-icon-svg e-fas-star-of-life"
                                        viewBox="0 0 480 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M471.99 334.43L336.06 256l135.93-78.43c7.66-4.42 10.28-14.2 5.86-21.86l-32.02-55.43c-4.42-7.65-14.21-10.28-21.87-5.86l-135.93 78.43V16c0-8.84-7.17-16-16.01-16h-64.04c-8.84 0-16.01 7.16-16.01 16v156.86L56.04 94.43c-7.66-4.42-17.45-1.79-21.87 5.86L2.15 155.71c-4.42 7.65-1.8 17.44 5.86 21.86L143.94 256 8.01 334.43c-7.66 4.42-10.28 14.21-5.86 21.86l32.02 55.43c4.42 7.65 14.21 10.27 21.87 5.86l135.93-78.43V496c0 8.84 7.17 16 16.01 16h64.04c8.84 0 16.01-7.16 16.01-16V339.14l135.93 78.43c7.66 4.42 17.45 1.8 21.87-5.86l32.02-55.43c4.42-7.65 1.8-17.43-5.86-21.85z"></path>
                                      </svg>
                                    </span>
                                  </div>

                                  <div class="elementor-icon-box-content">
                                    <h5 class="elementor-icon-box-title">
                                      <span> {whyUs[1][0]} </span>
                                    </h5>

                                    <p class="elementor-icon-box-description">
                                      {whyUs[1][1]}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-3a55c67 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                              data-id="3a55c67"
                              data-element_type="widget"
                              data-widget_type="divider.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="elementor-divider">
                                  <span class="elementor-divider-separator"></span>
                                </div>
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-2c1d378 elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                              data-id="2c1d378"
                              data-element_type="widget"
                              data-widget_type="icon-box.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="elementor-icon-box-wrapper">
                                  <div class="elementor-icon-box-icon">
                                    <span class="elementor-icon elementor-animation-">
                                      <svg
                                        aria-hidden="true"
                                        class="e-font-icon-svg e-fas-star-of-life"
                                        viewBox="0 0 480 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M471.99 334.43L336.06 256l135.93-78.43c7.66-4.42 10.28-14.2 5.86-21.86l-32.02-55.43c-4.42-7.65-14.21-10.28-21.87-5.86l-135.93 78.43V16c0-8.84-7.17-16-16.01-16h-64.04c-8.84 0-16.01 7.16-16.01 16v156.86L56.04 94.43c-7.66-4.42-17.45-1.79-21.87 5.86L2.15 155.71c-4.42 7.65-1.8 17.44 5.86 21.86L143.94 256 8.01 334.43c-7.66 4.42-10.28 14.21-5.86 21.86l32.02 55.43c4.42 7.65 14.21 10.27 21.87 5.86l135.93-78.43V496c0 8.84 7.17 16 16.01 16h64.04c8.84 0 16.01-7.16 16.01-16V339.14l135.93 78.43c7.66 4.42 17.45 1.8 21.87-5.86l32.02-55.43c4.42-7.65 1.8-17.43-5.86-21.85z"></path>
                                      </svg>
                                    </span>
                                  </div>

                                  <div class="elementor-icon-box-content">
                                    <h5 class="elementor-icon-box-title">
                                      <span> {whyUs[2][0]} </span>
                                    </h5>

                                    <p class="elementor-icon-box-description">
                                      {whyUs[2][1]}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="elementor-element elementor-element-d06c7f0 e-con-full e-flex e-con e-child"
                            data-id="d06c7f0"
                            data-element_type="container"
                          >
                            <div
                              class="elementor-element elementor-element-27c1929 elementor-widget elementor-widget-image"
                              data-id="27c1929"
                              data-element_type="widget"
                              data-widget_type="image.default"
                            >
                              <div class="elementor-widget-container">
                                <img
                                  loading="lazy"
                                  decoding="async"
                                  width="570"
                                  height="800"
                                  src={whyUsImg}
                                  class="attachment-full size-full wp-image-212"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="elementor-element elementor-element-9887c8a e-flex e-con-boxed e-con e-parent"
                        data-id="9887c8a"
                        data-element_type="container"
                        data-settings='{"background_background":"classic"}'
                      >
                        <div class="e-con-inner">
                          <div
                            class="elementor-element elementor-element-12a8db9 elementor-position-left elementor-vertical-align-middle elementor-vertical-align-middle elementor-view-default elementor-widget elementor-widget-icon-box"
                            data-id="12a8db9"
                            data-element_type="widget"
                            data-widget_type="icon-box.default"
                          >
                            <div class="elementor-widget-container">
                              <div class="elementor-icon-box-wrapper">
                                <div class="elementor-icon-box-icon">
                                  <span class="elementor-icon elementor-animation-">
                                    <svg
                                      aria-hidden="true"
                                      class="e-font-icon-svg e-fas-leaf"
                                      viewBox="0 0 576 512"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z"></path>
                                    </svg>
                                  </span>
                                </div>

                                <div class="elementor-icon-box-content">
                                  <p class="elementor-icon-box-title">
                                    <span> Our Projects </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="elementor-element elementor-element-3cd7462 elementor-widget elementor-widget-heading"
                            data-id="3cd7462"
                            data-element_type="widget"
                            data-widget_type="heading.default"
                          >
                            <div class="elementor-widget-container">
                              <h2 class="elementor-heading-title elementor-size-default">
                                Our Stunning Projects
                              </h2>
                            </div>
                          </div>
                          <div
                            class="elementor-element elementor-element-fab24e0 e-con-full e-grid e-con e-child"
                            data-id="fab24e0"
                            data-element_type="container"
                          >
                            <div
                              class="elementor-element elementor-element-892f78f elementor-widget elementor-widget-image"
                              data-id="892f78f"
                              data-element_type="widget"
                              data-widget_type="image.default"
                            >
                              <div class="elementor-widget-container">
                                <img
                                  loading="lazy"
                                  decoding="async"
                                  width="387"
                                  height="280"
                                  src={ourProjectsImg[0]}
                                  class="attachment-full size-full wp-image-233"
                                />
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-892f78f elementor-widget elementor-widget-image"
                              data-id="892f78f"
                              data-element_type="widget"
                              data-widget_type="image.default"
                            >
                              <div class="elementor-widget-container">
                                <img
                                  loading="lazy"
                                  decoding="async"
                                  width="387"
                                  height="280"
                                  src={ourProjectsImg[1]}
                                  class="attachment-full size-full wp-image-233"
                                />
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-f5b1ff3 elementor-widget elementor-widget-image"
                              data-id="f5b1ff3"
                              data-element_type="widget"
                              data-widget_type="image.default"
                            >
                              <div class="elementor-widget-container">
                                <img
                                  loading="lazy"
                                  decoding="async"
                                  width="387"
                                  height="280"
                                  src={ourProjectsImg[2]}
                                  class="attachment-full size-full wp-image-235"
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            class="elementor-element elementor-element-45850a8 elementor-align-center elementor-widget elementor-widget-button"
                            data-id="45850a8"
                            data-element_type="widget"
                            data-widget_type="button.default"
                          >
                            <div class="elementor-widget-container">
                              <div class="elementor-button-wrapper">
                                <a
                                  class="elementor-button elementor-button-link elementor-size-sm"
                                  href="#"
                                >
                                  <span class="elementor-button-content-wrapper">
                                    <span class="elementor-button-icon">
                                      <svg
                                        aria-hidden="true"
                                        class="e-font-icon-svg e-fas-chevron-right"
                                        viewBox="0 0 320 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                                      </svg>
                                    </span>
                                    <span class="elementor-button-text">
                                      View All Projects
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="elementor-element elementor-element-d10e28f e-flex e-con-boxed e-con e-parent"
                        data-id="d10e28f"
                        data-element_type="container"
                        data-settings='{"background_background":"classic"}'
                      >
                        <div class="e-con-inner">
                          <div
                            class="elementor-element elementor-element-209e0e3 elementor-position-left elementor-vertical-align-middle elementor-vertical-align-middle elementor-view-default elementor-widget elementor-widget-icon-box"
                            data-id="209e0e3"
                            data-element_type="widget"
                            data-widget_type="icon-box.default"
                          >
                            <div class="elementor-widget-container">
                              <div class="elementor-icon-box-wrapper">
                                <div class="elementor-icon-box-icon">
                                  <span class="elementor-icon elementor-animation-">
                                    <svg
                                      aria-hidden="true"
                                      class="e-font-icon-svg e-fas-leaf"
                                      viewBox="0 0 576 512"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z"></path>
                                    </svg>
                                  </span>
                                </div>

                                <div class="elementor-icon-box-content">
                                  <p class="elementor-icon-box-title">
                                    <span> Testimonials </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="elementor-element elementor-element-2070755 elementor-widget elementor-widget-heading"
                            data-id="2070755"
                            data-element_type="widget"
                            data-widget_type="heading.default"
                          >
                            <div class="elementor-widget-container">
                              <h2 class="elementor-heading-title elementor-size-default">
                                Honest Reviews from our Customers
                              </h2>
                            </div>
                          </div>
                          <div
                            class="elementor-element elementor-element-5c9058a e-grid e-con-full e-con e-child"
                            data-id="5c9058a"
                            data-element_type="container"
                          >
                            <div
                              class="elementor-element elementor-element-d9500aa e-con-full e-flex e-con e-child"
                              data-id="d9500aa"
                              data-element_type="container"
                              data-settings='{"background_background":"classic"}'
                            >
                              <div
                                class="elementor-element elementor-element-c6d8fc3 elementor-position-left elementor-vertical-align-middle elementor-position-top elementor-widget elementor-widget-image-box"
                                data-id="c6d8fc3"
                                data-element_type="widget"
                                data-widget_type="image-box.default"
                              >
                                <div class="elementor-widget-container">
                                  <div class="elementor-image-box-wrapper">
                                    <figure class="elementor-image-box-img">
                                      <img
                                        loading="lazy"
                                        decoding="async"
                                        width="100"
                                        height="100"
                                        src="https://websitedemos.net/gardening-and-landscape-02/wp-content/uploads/sites/1520/2025/03/testimonial-01.png"
                                        class="attachment-full size-full wp-image-260"
                                        alt=""
                                      />
                                    </figure>
                                    <div class="elementor-image-box-content">
                                      <h5 class="elementor-image-box-title">
                                        {testimonials[0][0]}
                                      </h5>
                                      <p class="elementor-image-box-description">
                                        {testimonials[0][1]}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="elementor-element elementor-element-ab9d661 elementor-widget elementor-widget-text-editor"
                                data-id="ab9d661"
                                data-element_type="widget"
                                data-widget_type="text-editor.default"
                              >
                                <div class="elementor-widget-container">
                                  &#8220;{testimonials[0][2]}&#8221;
                                </div>
                              </div>
                              <div
                                class="elementor-element elementor-element-4d9ab9e e-con-full e-grid e-con e-child"
                                data-id="4d9ab9e"
                                data-element_type="container"
                              >
                                <div
                                  class="elementor-element elementor-element-fe3f79a elementor-widget elementor-widget-rating"
                                  data-id="fe3f79a"
                                  data-element_type="widget"
                                  data-widget_type="rating.default"
                                >
                                  <div class="elementor-widget-container">
                                    <div
                                      class="e-rating"
                                      itemtype="https://schema.org/Rating"
                                      itemscope=""
                                      itemprop="reviewRating"
                                    >
                                      <meta
                                        itemprop="worstRating"
                                        content="0"
                                      />
                                      <meta itemprop="bestRating" content="5" />
                                      <div
                                        class="e-rating-wrapper"
                                        itemprop="ratingValue"
                                        content="5"
                                        role="img"
                                        aria-label="Rated 5 out of 5"
                                      >
                                        <div class="e-icon">
                                          <div class="e-icon-wrapper e-icon-marked">
                                            <svg
                                              aria-hidden="true"
                                              class="e-font-icon-svg e-eicon-star"
                                              viewBox="0 0 1000 1000"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                            </svg>
                                          </div>
                                          <div class="e-icon-wrapper e-icon-unmarked">
                                            <svg
                                              aria-hidden="true"
                                              class="e-font-icon-svg e-eicon-star"
                                              viewBox="0 0 1000 1000"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                        <div class="e-icon">
                                          <div class="e-icon-wrapper e-icon-marked">
                                            <svg
                                              aria-hidden="true"
                                              class="e-font-icon-svg e-eicon-star"
                                              viewBox="0 0 1000 1000"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                            </svg>
                                          </div>
                                          <div class="e-icon-wrapper e-icon-unmarked">
                                            <svg
                                              aria-hidden="true"
                                              class="e-font-icon-svg e-eicon-star"
                                              viewBox="0 0 1000 1000"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                        <div class="e-icon">
                                          <div class="e-icon-wrapper e-icon-marked">
                                            <svg
                                              aria-hidden="true"
                                              class="e-font-icon-svg e-eicon-star"
                                              viewBox="0 0 1000 1000"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                            </svg>
                                          </div>
                                          <div class="e-icon-wrapper e-icon-unmarked">
                                            <svg
                                              aria-hidden="true"
                                              class="e-font-icon-svg e-eicon-star"
                                              viewBox="0 0 1000 1000"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                        <div class="e-icon">
                                          <div class="e-icon-wrapper e-icon-marked">
                                            <svg
                                              aria-hidden="true"
                                              class="e-font-icon-svg e-eicon-star"
                                              viewBox="0 0 1000 1000"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                            </svg>
                                          </div>
                                          <div class="e-icon-wrapper e-icon-unmarked">
                                            <svg
                                              aria-hidden="true"
                                              class="e-font-icon-svg e-eicon-star"
                                              viewBox="0 0 1000 1000"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                        <div class="e-icon">
                                          <div class="e-icon-wrapper e-icon-marked">
                                            <svg
                                              aria-hidden="true"
                                              class="e-font-icon-svg e-eicon-star"
                                              viewBox="0 0 1000 1000"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                            </svg>
                                          </div>
                                          <div class="e-icon-wrapper e-icon-unmarked">
                                            <svg
                                              aria-hidden="true"
                                              class="e-font-icon-svg e-eicon-star"
                                              viewBox="0 0 1000 1000"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  class="elementor-element elementor-element-f912729 elementor-view-default elementor-widget elementor-widget-icon"
                                  data-id="f912729"
                                  data-element_type="widget"
                                  data-widget_type="icon.default"
                                >
                                  <div class="elementor-widget-container">
                                    <div class="elementor-icon-wrapper">
                                      <a class="elementor-icon" href="#">
                                        <svg
                                          aria-hidden="true"
                                          class="e-font-icon-svg e-fab-google"
                                          viewBox="0 0 488 512"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                                        </svg>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-5e61df3 e-con-full e-flex e-con e-child"
                              data-id="5e61df3"
                              data-element_type="container"
                              data-settings='{"background_background":"classic"}'
                            >
                              <div
                                class="elementor-element elementor-element-9e9efc8 elementor-position-left elementor-vertical-align-middle elementor-position-top elementor-widget elementor-widget-image-box"
                                data-id="9e9efc8"
                                data-element_type="widget"
                                data-widget_type="image-box.default"
                              >
                                <div class="elementor-widget-container">
                                  <div class="elementor-image-box-wrapper">
                                    <figure class="elementor-image-box-img">
                                      <img
                                        loading="lazy"
                                        decoding="async"
                                        width="100"
                                        height="100"
                                        src="https://websitedemos.net/gardening-and-landscape-02/wp-content/uploads/sites/1520/2025/03/testimonial-02.png"
                                        class="attachment-full size-full wp-image-261"
                                        alt=""
                                      />
                                    </figure>
                                    <div class="elementor-image-box-content">
                                      <h5 class="elementor-image-box-title">
                                        {testimonials[1][0]}
                                      </h5>
                                      <p class="elementor-image-box-description">
                                        {testimonials[1][1]}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="elementor-element elementor-element-b92680f elementor-widget elementor-widget-text-editor"
                                data-id="b92680f"
                                data-element_type="widget"
                                data-widget_type="text-editor.default"
                              >
                                <div class="elementor-widget-container">
                                  &#8220;{testimonials[1][2]}&#8221;
                                </div>
                              </div>
                              <div
                                class="elementor-element elementor-element-08203a5 e-con-full e-grid e-con e-child"
                                data-id="08203a5"
                                data-element_type="container"
                              >
                                <div
                                  class="elementor-element elementor-element-d84e78d elementor-widget elementor-widget-rating"
                                  data-id="d84e78d"
                                  data-element_type="widget"
                                  data-widget_type="rating.default"
                                >
                                  <div class="elementor-widget-container">
                                    <div
                                      class="e-rating"
                                      itemtype="https://schema.org/Rating"
                                      itemscope=""
                                      itemprop="reviewRating"
                                    >
                                      <meta
                                        itemprop="worstRating"
                                        content="0"
                                      />
                                      <meta itemprop="bestRating" content="5" />
                                      <div
                                        class="e-rating-wrapper"
                                        itemprop="ratingValue"
                                        content="5"
                                        role="img"
                                        aria-label="Rated 5 out of 5"
                                      >
                                        <div class="e-icon">
                                          <div class="e-icon-wrapper e-icon-marked">
                                            <svg
                                              aria-hidden="true"
                                              class="e-font-icon-svg e-eicon-star"
                                              viewBox="0 0 1000 1000"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                            </svg>
                                          </div>
                                          <div class="e-icon-wrapper e-icon-unmarked">
                                            <svg
                                              aria-hidden="true"
                                              class="e-font-icon-svg e-eicon-star"
                                              viewBox="0 0 1000 1000"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                        <div class="e-icon">
                                          <div class="e-icon-wrapper e-icon-marked">
                                            <svg
                                              aria-hidden="true"
                                              class="e-font-icon-svg e-eicon-star"
                                              viewBox="0 0 1000 1000"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                            </svg>
                                          </div>
                                          <div class="e-icon-wrapper e-icon-unmarked">
                                            <svg
                                              aria-hidden="true"
                                              class="e-font-icon-svg e-eicon-star"
                                              viewBox="0 0 1000 1000"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                        <div class="e-icon">
                                          <div class="e-icon-wrapper e-icon-marked">
                                            <svg
                                              aria-hidden="true"
                                              class="e-font-icon-svg e-eicon-star"
                                              viewBox="0 0 1000 1000"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                            </svg>
                                          </div>
                                          <div class="e-icon-wrapper e-icon-unmarked">
                                            <svg
                                              aria-hidden="true"
                                              class="e-font-icon-svg e-eicon-star"
                                              viewBox="0 0 1000 1000"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                        <div class="e-icon">
                                          <div class="e-icon-wrapper e-icon-marked">
                                            <svg
                                              aria-hidden="true"
                                              class="e-font-icon-svg e-eicon-star"
                                              viewBox="0 0 1000 1000"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                            </svg>
                                          </div>
                                          <div class="e-icon-wrapper e-icon-unmarked">
                                            <svg
                                              aria-hidden="true"
                                              class="e-font-icon-svg e-eicon-star"
                                              viewBox="0 0 1000 1000"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                        <div class="e-icon">
                                          <div class="e-icon-wrapper e-icon-marked">
                                            <svg
                                              aria-hidden="true"
                                              class="e-font-icon-svg e-eicon-star"
                                              viewBox="0 0 1000 1000"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                            </svg>
                                          </div>
                                          <div class="e-icon-wrapper e-icon-unmarked">
                                            <svg
                                              aria-hidden="true"
                                              class="e-font-icon-svg e-eicon-star"
                                              viewBox="0 0 1000 1000"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  class="elementor-element elementor-element-1d4e899 elementor-view-default elementor-widget elementor-widget-icon"
                                  data-id="1d4e899"
                                  data-element_type="widget"
                                  data-widget_type="icon.default"
                                >
                                  <div class="elementor-widget-container">
                                    <div class="elementor-icon-wrapper">
                                      <a class="elementor-icon" href="#">
                                        <svg
                                          aria-hidden="true"
                                          class="e-font-icon-svg e-fab-google"
                                          viewBox="0 0 488 512"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                                        </svg>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </main>
            </div>
          </div>
        </div>
        <footer
          class="site-footer"
          id="colophon"
          itemtype="https://schema.org/WPFooter"
          itemscope="itemscope"
          itemid="#colophon"
        >
          <div
            class="site-primary-footer-wrap ast-builder-grid-row-container site-footer-focus-item ast-builder-grid-row-4-equal ast-builder-grid-row-tablet-4-equal ast-builder-grid-row-mobile-full ast-footer-row-stack ast-footer-row-tablet-stack ast-footer-row-mobile-stack"
            data-section="section-primary-footer-builder"
          >
            <div class="ast-builder-grid-row-container-inner">
              <div class="ast-builder-footer-grid-columns site-primary-footer-inner-wrap ast-builder-grid-row">
                <div class="site-footer-primary-section-1 site-footer-section site-footer-section-1">
                  <aside
                    class="footer-widget-area widget-area site-footer-focus-item footer-widget-area-inner"
                    data-section="sidebar-widgets-footer-widget-1"
                    aria-label="Footer Widget 1"
                  >
                    <section
                      id="block-8"
                      class="widget widget_block widget_media_image"
                    >
                      <span
                        style={{
                          fontWeight: "bold",
                          fontFamily: "Bricolage Grotesque, sans-serif",
                          fontSize: "30px",
                        }}
                      >
                        {title}
                      </span>
                    </section>
                    <section
                      id="block-9"
                      class="widget widget_block widget_text"
                    >
                      <p>{ourMoto}</p>
                    </section>
                  </aside>
                </div>
                <div class="site-footer-primary-section-2 site-footer-section site-footer-section-2">
                  <aside
                    class="footer-widget-area widget-area site-footer-focus-item footer-widget-area-inner"
                    data-section="sidebar-widgets-footer-widget-2"
                    aria-label="Footer Widget 2"
                  >
                    <section id="block-26" class="widget widget_block">
                      <h5 class="wp-block-heading">Quick Links</h5>
                    </section>
                    <section id="nav_menu-3" class="widget widget_nav_menu">
                      <nav
                        class="menu-primary-menu-container"
                        aria-label="Menu"
                      >
                        <ul id="menu-primary-menu" class="menu">
                          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-13 current_page_item menu-item-29">
                            <a href="#" aria-current="page" class="menu-link">
                              Home
                            </a>
                          </li>
                          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-28">
                            <a href="#" class="menu-link">
                              About
                            </a>
                          </li>
                          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-27">
                            <a href="#" class="menu-link">
                              Services
                            </a>
                          </li>
                          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-26">
                            <a href="#" class="menu-link">
                              Projects
                            </a>
                          </li>
                          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-25">
                            <a href="#" class="menu-link">
                              Contact
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </section>
                  </aside>
                </div>
                <div class="site-footer-primary-section-3 site-footer-section site-footer-section-3">
                  <aside
                    class="footer-widget-area widget-area site-footer-focus-item footer-widget-area-inner"
                    data-section="sidebar-widgets-footer-widget-3"
                    aria-label="Footer Widget 3"
                  >
                    <section id="block-24" class="widget widget_block">
                      <h5 class="wp-block-heading">Services</h5>
                    </section>
                    <section id="nav_menu-5" class="widget widget_nav_menu">
                      <nav class="menu-services-container" aria-label="Menu">
                        <ul id="menu-services" class="menu">
                          <li
                            id="menu-item-525"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-525"
                          >
                            <a href="#" class="menu-link">
                              {services[0][0]}
                            </a>
                          </li>
                          <li
                            id="menu-item-526"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-526"
                          >
                            <a href="#" class="menu-link">
                              {services[1][0]}
                            </a>
                          </li>
                          <li
                            id="menu-item-527"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-527"
                          >
                            <a href="#" class="menu-link">
                              {services[2][0]}
                            </a>
                          </li>
                          <li
                            id="menu-item-528"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-528"
                          >
                            <a href="#" class="menu-link">
                              {services[3][0]}
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </section>
                  </aside>
                </div>
                <div class="site-footer-primary-section-4 site-footer-section site-footer-section-4">
                  <aside
                    class="footer-widget-area widget-area site-footer-focus-item footer-widget-area-inner"
                    data-section="sidebar-widgets-footer-widget-4"
                    aria-label="Footer Widget 4"
                  >
                    <section id="block-22" class="widget widget_block">
                      <h5 class="wp-block-heading">Address</h5>
                    </section>
                    <section
                      id="block-28"
                      class="widget widget_block widget_text"
                    >
                      <p>{address}</p>
                    </section>
                    <section
                      id="block-32"
                      class="widget widget_block widget_text"
                    >
                      <p class="has-ast-global-color-2-color has-text-color has-link-color wp-elements-7c9d8dd74d57ccdd2bc94572e9c5ad8e">
                        <strong>Call Us</strong>: {phone}
                      </p>
                    </section>
                  </aside>
                </div>
              </div>
            </div>
          </div>
          <div
            class="site-below-footer-wrap ast-builder-grid-row-container site-footer-focus-item ast-builder-grid-row-full ast-builder-grid-row-tablet-full ast-builder-grid-row-mobile-full ast-footer-row-stack ast-footer-row-tablet-stack ast-footer-row-mobile-stack"
            data-section="section-below-footer-builder"
          >
            <div class="ast-builder-grid-row-container-inner">
              <div class="ast-builder-footer-grid-columns site-below-footer-inner-wrap ast-builder-grid-row">
                <div class="site-footer-below-section-1 site-footer-section site-footer-section-1">
                  <div
                    class="ast-builder-layout-element ast-flex site-footer-focus-item ast-footer-copyright"
                    data-section="section-footer-builder"
                  >
                    <div class="ast-footer-copyright">
                      <p>
                        Copyright &copy; 2025 Earthly Elegance All rights
                        reserved.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width="0"
        height="0"
        focusable="false"
        role="none"
        style={{
          visibility: "hidden",
          position: "absolute",
          left: "-9999px",
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="ast-img-color-filter-2">
            <feColorMatrix
              color-interpolation-filters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            />
            <feComponentTransfer color-interpolation-filters="sRGB">
              <feFuncR
                type="table"
                tableValues="0.95294117647059 0.95294117647059"
              />
              <feFuncG
                type="table"
                tableValues="0.98039215686275 0.98039215686275"
              />
              <feFuncB
                type="table"
                tableValues="0.96470588235294 0.96470588235294"
              />
              <feFuncA type="table" tableValues="1 1" />
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>
      <div
        id="ast-scroll-top"
        tabindex="0"
        class="ast-scroll-top-icon ast-scroll-to-top-right"
        data-on-devices="both"
      >
        <span class="ast-icon icon-arrow">
          <svg
            class="ast-arrow-svg"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            width="26px"
            height="16.043px"
            viewBox="57 35.171 26 16.043"
            enable-background="new 57 35.171 26 16.043"
            xml:space="preserve"
          >
            <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
          </svg>
        </span>
        <span class="screen-reader-text">Scroll to Top</span>
      </div>
      <div
        id="showcase-cta-entry-root"
        class="st-customizer-cta st-section-root"
      ></div>
    </div>
  );
};

export default Temp1;
