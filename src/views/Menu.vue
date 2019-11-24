<template>
  <div class="screen">
    <div class="top">
      <a @click="$router.go(-1)" class="top__button top__button_back"></a>
      <p class="screen__name">Наши контакты</p>
    </div>
    <div class="menu">
      <div class="menu-set">
        <router-link
        tag="a"
        to="/login"
        class="menu-item menu-item__icon menu-item__icon_name"
      >Войти</router-link>
        <!-- <a class="menu-item menu-item__icon menu-item__icon_orders" href>Мои заказы</a> -->
        <!-- <a class="menu-item menu-item__icon menu-item__icon_city" href>
          Мой город
          <span>Москва</span>
        </a>-->
        <!-- <a class="menu-item menu-item__icon menu-item__icon_locations" href>Мои адреса</a> -->
        <router-link tag="a" to="faq" class="menu-item menu-item__icon menu-item__icon_faq">FAQ</router-link>
        <router-link
          tag="a"
          to="contacts"
          class="menu-item menu-item__icon menu-item__icon_contacts"
        >Наши контакты</router-link>
      </div>
      <router-link
        tag="a"
        to="index"
        class="button button_bottom"
      >+ Новый заказ</router-link>
    </div>
  </div>
</template>
