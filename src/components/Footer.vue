<script setup></script>

<template>
  <div class="bar-footer">
    <div>
      <div>
        <div>
          <div class="col-footer">
            <img src="../assets/images/github.svg" />
            <p>© All rights reserved, 2022</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../assets/base.scss";

p {
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #fff;
}

.bar-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #24292f;
  height: 120px;
}
.col-footer{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  height: 120px;
}
</style>
