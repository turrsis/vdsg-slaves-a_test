<template>
    <div id="Carousel-path:/" xxxxxxxxxx="Carousel" v-designer.true="">
        <v-sheet width="400px">
            with v-carousel-item only
            <v-carousel hide-delimiter-background="">
                <v-carousel-item src="/dogs/img_01.png">
                    XXXXXXXXXXX
                </v-carousel-item>
                <v-carousel-item src="/dogs/img_02.png">
                </v-carousel-item>
                <v-carousel-item src="/dogs/img_03.png">
                </v-carousel-item>
            </v-carousel>
            <br>
            </br>
            with img
            <v-carousel>
                <v-carousel-item>
                    <v-img src="/dogs/img_07.png" contain="">
                    </v-img>
                </v-carousel-item>
                <v-carousel-item>
                    <v-img src="/dogs/img_08.png" contain="">
                    </v-img>
                </v-carousel-item>
                <v-carousel-item>
                    <v-img src="/dogs/img_09.png" contain="">
                    </v-img>
                </v-carousel-item>
            </v-carousel>
        </v-sheet>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: [{
                src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
            }, {
                src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
            }, {
                src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
            }, {
                src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
            }],
            dogsPhotos: ['dog_01.jpg', 'dog_02.jpg', 'dog_03.jpg', 'dog_04.jpg', 'dog_05.jpg']
        };
    }

};
</script>
