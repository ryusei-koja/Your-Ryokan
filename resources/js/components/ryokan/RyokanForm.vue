<template>
  <form>
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="10"
      label="お名前"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="メールアドレス"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="phone"
      :error-messages="phoneErrors"
      label="電話番号"
      required
      @input="$v.phone.$touch()"
      @blur="$v.phone.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="ReservationDate"
      :error-messages="reservationDateErrors"
      label="御予約日"
      required
      @input="$v.ReservationDate.$touch()"
      @blur="$v.ReservationDate.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="ReservationRoom"
      :error-messages="reservationRoomErrors"
      label="御予約のお部屋"
      required
      @input="$v.ReservationRoom.$touch()"
      @blur="$v.ReservationRoom.$touch()"
    ></v-text-field>
    

    <v-btn
      class="mr-4"
      @click="submit"
    >
      submit
    </v-btn>
    <v-btn @click="clear">
      clear
    </v-btn>
  </form>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, },
      email: { required, email },
      phone: { required, maxLength: maxLength(11)},
      ReservationDate: { required, email },
      ReservationRoom: { required, email },
    },

    data: () => ({
      name: '',
      email: '',
      phone: '',
      ReservationDate: '',
      ReservationRoom: '',
    }),
    props:[
      'RyokanId'
    ],

    computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        // !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('名前を入力して下さい')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('メールアドレスではありません！')
        !this.$v.email.required && errors.push('メールアドレスを入力して下さい')
        return errors
      },
      phoneErrors () {
        const errors = []
        if (!this.$v.phone.$dirty) return errors
        !this.$v.phone.required && errors.push('電話番号を入力して下さい')
        return errors
      },
      reservationDateErrors () {
        const errors = []
        if (!this.$v.ReservationDate.$dirty) return errors
        !this.$v.ReservationDate.required && errors.push('御予約日を入力して下さい')
        return errors
      },
      reservationRoomErrors () {
        const errors = []
        if (!this.$v.ReservationRoom.$dirty) return errors
        !this.$v.ReservationRoom.required && errors.push('御予約のお部屋を入力して下さい')
        return errors
      },
    },

    methods: {
      submit () {
        let data = new FormData();
        data.append("name", this.name);
        data.append("email", this.email);
        data.append("phone", this.phone);
        data.append("visit_duration", this.ReservationDate);
        data.append("room", this.ReservationRoom);
        data.append("ryokan_id", this.RyokanId);
        axios.post('api/reservation',data)
        .then( ( res ) => {
                this.name = "";
                this.email = "";
                this.phone = "";
                this.ReservationDate = "";
                this.ReservationRoom = "";
                // this.message="予約が完了しました！"
                console.log(res);
            })
            .catch(err => {
                    console.log(err);
                });
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.phone = ''
        this.ReservationDate = ''
        this.ReservationRoom = ''
      },
    },
  }
</script>