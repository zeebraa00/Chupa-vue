<template>
  	<nav class="fh5co-nav" role="navigation">
		<div class="container">
			<div class="row">
				<div class="col">
					<router-link to="/"></router-link>
					<div id="fh5co-logo"><a href="/"> Write.Get.Love </a></div>
				</div>
				<div>
				<ul class="col">
					<router-link to="/help"><Icon/></router-link>
				</ul>
				</div>
				<div>
				<ul class="col">
					<router-link to="/kakaologin"><Login/></router-link>
				</ul>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
import Login from "@/views/login/Login"
import Icon from "@/views/help/Icon"


export default {
	components : {
		Login,
		Icon
	}
}
</script>

<style>

</style>