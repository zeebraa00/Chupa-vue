<template>
  	<div>
		<div class="container">
            <br><br>
            <div id="category">
            <center>
                <div id="myButnContainer">
                    <button v-bind:class="{'butn': nonclick1, 'butn_active': click1}" v-on:click="filterSelection('all')"> All</button>
                    <button v-bind:class="{'butn': nonclick2, 'butn_active': click2}" v-on:click="filterSelection('female')">Female</button>
                    <button v-bind:class="{'butn': nonclick3, 'butn_active': click3}" v-on:click="filterSelection('male')"> Male</button>
                </div>
            </center>
            </div>
            <br>
			<div class="row">
                <PostIt
                v-for="post in posts"
                :post="post"
                :key="post.id" />
	<div class="gototop js-top">
		<a href="#" class="js-gotop"><i class="icon-arrow-up"></i></a>
	</div>
	</div>
	</div>
	</div>
</template>

<script>
import PostIt from '@/views/main/PostIt'
import { truncate } from 'fs';

export default {
    data() {
        return {
            posts: [],
            nonclick1 : false,
            click1 : true,
            nonclick2 : true,
            click2 : false,
            nonclick3 : true,
            click3 : false,
            sex: ''
        }
    },
    components: {
        PostIt
    },
    created: async function () {
        const List = await this.$axios.get('/rest/post_it/sex/all');
        this.posts = List.data.posts;
        this.sex = 'all';
    },
    mounted : async function () {
        var vm = this;
        window.onscroll = async function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            let a;
            if (vm.sex == 'male') {
                a = await vm.$axios.get(`/rest/post_it/sex/male/${vm.posts[vm.posts.length -1].id}`);
            } else if (vm.sex == 'female') {
                a = await vm.$axios.get(`/rest/post_it/sex/female/${vm.posts[vm.posts.length -1].id}`);
            } else {
                a = await vm.$axios.get(`/rest/post_it/sex/all/${vm.posts[vm.posts.length -1].id}`);
            }
            for(let i=0; i<a.data.posts.length; i++) {
                vm.posts.push(a.data.posts[i])
            }
        }
        };
    },
    methods : {
        async filterSelection (sex) {
            let a;
            if (sex == 'male') {
                this.sex = 'male';
                a = await this.$axios.get(`/rest/post_it/sex/male`)
                    this.nonclick1 = true;
                    this.click1 = false;
                    this.nonclick2 = true;
                    this.click2 = false;
                    this.nonclick3 = false;
                    this.click3 = true;
            } else if (sex == 'female') {
                this.sex = 'female';
                a = await this.$axios.get(`/rest/post_it/sex/female`)
                    this.nonclick1 = true;
                    this.click1 = false;
                    this.nonclick2 = false;
                    this.click2 = true;
                    this.nonclick3 = true;
                    this.click3 = false;
            } else {
                this.sex = 'all';
                a = await this.$axios.get(`/rest/post_it/sex/all`)
                    this.nonclick1 = false;
                    this.click1 = true;
                    this.nonclick2 = true;
                    this.click2 = false;
                    this.nonclick3 = true;
                    this.click3 = false;
            }
            this.posts = a.data.posts;
        }
    }
}
</script>

<style>
.butn {
  border: none;
  outline: none;
  padding: 12px 16px;
  background-color: #f1f1f1;
  color: black;
  cursor: pointer;
}
.butn_active {
  border: none;
  outline: none;
  padding: 12px 16px;
  background-color: slategray;
  color: white;
  cursor: pointer; 
}
</style>