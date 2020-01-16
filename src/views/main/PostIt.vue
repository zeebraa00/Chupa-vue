<template>
    <div class="col-md-4 text-center"> <!-- animate-box-->
        <div class="product">
            <div class="product-grid" :style="'background-image:url(' + imageUrl + ');'">
            <div class="row">
                <div class="col-xs-10 col-xs-offset-1">
                    <a>
                        <br><br><br><br><br><br><br>
                        <h3>{{post2.nickname}}</h3>
                        <br><br><br>
                        <h5>{{post2.text}}</h5>
                        <br><br><br>
                        <!-- <button class="btn" href="single.html">purchase</button> 관리자에게만 보이게 할 것 -->
                    </a>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['post'],
    data() {
        return {
            post2: this.post
        }
    },
    created: async function () {
        if (this.post2.sex) {
            if(this.post2.sold) {
                this.imageUrl = '/images/product-1-1.png'
            }else {
                this.imageUrl = '/images/product-1.png'
            }
        }else {
            if(this.post2.sold) {
                this.imageUrl = '/images/product-2-1.png'
            }else {
                this.imageUrl = '/images/product-2.png'
            }
        }
        // this.imageUrl = this.post2.sex ? '/images/product-1-1.png' : '/images/product-2-1.png'
    }
}
</script>

<style>

</style>