<template>
  <div id="logIncontent" v-if="loginshow">
    <div id="loginlogo">
      <img src="../assets/logo.png" alt />
    </div>
    <div id="login">
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit="handleSubmit"
      >
        <a-form-item>
          <a-input
            v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] },
        ]"
            placeholder="Username"
          >
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] },
        ]"
            type="password"
            placeholder="Password"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-checkbox
            style="float: left"
            v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
          >Remember me</a-checkbox>
          <a class="login-form-forgot" href>Forgot password</a>
          <a-button
            type="primary"
            html-type="submit"
            class="login-form-button"
            @click="checkUser"
          >Log in</a-button>Or
          <a href>register now!</a>
        </a-form-item>
      </a-form>
    </div>
    <div id="otherlog">
      <div id="othermethod">
        <span>try to login with other methods</span>
      </div>
      <a-space :size="size">
        <a-icon type="wechat" style="fontSize: 35px; color:rgb(15, 206, 27)" @click="wechantlogin" />
        <a-icon type="qq" style="fontSize: 35px; color:rgb(27, 27, 27)" @click="qqlogin" />
        <a-icon
          type="alipay-circle"
          style="fontSize: 35px; color:rgb(21, 118, 255)"
          @click="alpaylogin"
        />
      </a-space>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      size: 60,
      loginshow: true
    };
  },
  computed: {
    username() {
      return this.$store.state.username;
    }
  },
  watch: {
    username(val) {
      //console.log("this.$store.state.username: ", val);
      this.form.setFieldsValue({ username: val });
    }
  },
  created() {
    this.form = this.$form.createForm(this, {
      onFieldsChange: (_, changedFields) => {
        this.$emit("change", changedFields);
      },
      mapPropsToFields: () => {
        return {
          username: this.$form.createFormField({
            value: this.username
          })
        };
      },
      onValuesChange: (_, values) => {
        //console.log(values);
      }
    });
  },
  methods: {
    checkUser(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          for (let i = 0; i < this.$store.state.usermessage.length; i++) {
            if(this.$store.state.usermessage[i].username == values.userName && this.$store.state.usermessage[i].password == values.password) {
              console.log('登录校验成功')       
              this.$router.push('/Home')  
              this.loginshow = false   
              return 
            } 
          }
          alert('您的用户名或密码错误')
        }
      });
      
      //console.log(this.$store.state.usermessage,this.form)
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('记住密码成功')
        }
      });
    },
    wechantlogin() {
      this.$notification.open({
        message: "sorry to borther by wechant",
        description:
          "software just support learning can't connection with wechantApi",
        onClick: () => {
          console.log("Notification Clicked!");
        }
      });
    },
    qqlogin() {
      this.$notification.open({
        message: "sorry to borther by tencentqq",
        description:
          "software just support learning can't connection with tencentqq",
        onClick: () => {
          console.log("Notification Clicked!");
        }
      });
    },
    alpaylogin() {
      this.$notification.open({
        message: "sorry to borther by alipay",
        description:
          "software just support learning can't connection with alipay",
        onClick: () => {
          console.log("Notification Clicked!");
        }
      });
    }
  }
};
</script>

<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
#loginlogo {
  margin: 0 auto;
  padding: 5vh;
}
#login {
  width: 85%;
  margin: 0 auto;
}
#othermethod {
  padding: 30px 10px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
</style>

