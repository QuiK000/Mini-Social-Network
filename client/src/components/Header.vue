<template>
  <div class="header">
    <div class="container container-flex">
      <div class="header__left">
        <div class="header__menu">
          <ul class="header__menu-ul">
            <li class="header__menu-li">
              <router-link to="/" active-class="active-link" class="header__menu-link">Registration</router-link>
            </li>
            <li class="header__menu-li">
              <router-link to="/" class="header__menu-link">Home</router-link>
            </li>
            <li class="header__menu-li">
              <router-link to="/" class="header__menu-link">Home</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="header__right">
        <div class="header__menu">
          <ul class="header__menu-ul">
            <li class="header__menu-li">
              <router-link to="/login" class="header__menu-link">Login</router-link>
            </li>
            <li class="header__menu-li">
              <router-link to="/" class="header__menu-link">Home</router-link>
            </li>
            <li class="header__menu-li">
              <router-link to="/" class="header__menu-link">Home</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style lang="scss">

  .header {
    background: #fff;
    height: 50px;
    margin-bottom: 30px;
    border-bottom: 1px solid #ccc;

    &__menu {
      display: flex;
      align-items: center;
      height: 50px;

      &-ul {
        display: flex;
      }

      &-li {
        margin-right: 20px;

        &:nth-last-child(1) {
          margin-right: 0;
        }
      }

      &-link {
        color: black;
        font-size: 16px;
        font-weight: 300;
        padding: 6px 12px;
        transition: .3s;

        &:hover {
          background: #f3f3f3;
        }
      }

      .active-link {
        background: #f3f3f3;
      }
    }
  }

</style>