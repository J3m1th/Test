<template lang='pug'>
	main.block
		.swiper.block__swiper(v-swiper:mySwiper="options" @slideChange="itemChange(mySwiper.realIndex)" @mouseover="swiperMouseOver" @mouseleave="swiperMouseLeave")
			.swiper-wrapper
				.swiper-slide(v-for="(item, index) in 3" :key="index + 1")
					h1.swiper__text Ink Lingerie
		.photos.block__photos(v-tilt="{speed: 500, perspective: 1200,  max: 10}")
			//- .photos__inner(v-tilt="{speed: 100, perspective: 1000,  max: 15, scale: 1 }")
			.photos__item-wrap.photos__item-wrap_left(v-if="!isMobile")
				template(v-for="(photo, i) in photos")
					.photos__item(:style="{backgroundImage: 'url('+ photo.img +')'}" :class="{'fade-in' : (listIndexLeft === i), 'fade-out' : (listIndexLeft !== i)}")
			
			.photos__item-wrap.photos__item-wrap_center
				template(v-for="(photo, i) in photos")
					.photos__item(:style="{backgroundImage: 'url('+ photo.img +')'}" :class="{'fade-in' : (listIndexCenter === i), 'fade-out' : (listIndexCenter !== i)}")

			.photos__item-wrap.photos__item-wrap_right(v-if="!isMobile")
				template(v-for="(photo, i) in photos")
					.photos__item(:style="{backgroundImage: 'url('+ photo.img +')'}" :class="{'fade-in' : (listIndexRight === i), 'fade-out' : (listIndexRight !== i)}")
			
</template>

<script>

let wW;

import photo1 from '~/static/img/main/photo1.png';
import photo2 from '~/static/img/main/photo2.png';
import photo3 from '~/static/img/main/photo3.png';

import AOS from 'aos';

export default {
	data() {
		return {
			isActive: false,

			listIndexLeft: 1,
			listIndexCenter: 0,
			listIndexRight: 2,

			isDesktop: true,
			isTablet: false,
			isMobile: false,

			photos: [
				{img: photo1},
				{img: photo2},
				{img: photo3},
			],

			options: {
				slidesPerView: 'auto',
				centeredSlides: true,
				spaceBetween: 280,
				loop: true,

				// Responsive breakpoints
				breakpoints: {
					// when window width is >= 350px
					400: {
						spaceBetween: 20
					},
					// when window width is >= 450px
					450: {
						spaceBetween: 30
					},
					// when window width is >= 960px
					960: {
						spaceBetween: 80
					},
					// when window width is >= 1200px
					1200: {
						spaceBetween: 180
					}
				}
			},

		}
	},

	mounted() {
		this.checkAdaptive();
		window.addEventListener('resize', this.checkAdaptive);
	},

	updated() {
		AOS.refreshHard();
	},

	beforeDestroy() {
		window.removeEventListener('resize', this.checkAdaptive);
	},

	methods: {

		checkAdaptive() {
			wW = window.innerWidth || document.documentElement.innerWidth;

			if(wW <= 1200) {
				this.isDesktop = false;
				this.isTablet = true;
				this.isMobile = false;
				if(wW <= 650) {
					this.isTablet = false;
					this.isMobile = true;
				}
			} else {
				this.isDesktop = true;
				this.isTablet = false;
			}

		},

		itemChange: function(index) {
	
			let countPhotos = this.photos.length;

			this.listIndexLeft = (index + 1) % countPhotos;
			this.listIndexCenter = index;
			this.listIndexRight = (index + 2) % countPhotos;
			
		},

		swiperMouseOver() {
			this.$emit("swiperInFocus");
		},

		swiperMouseLeave() {
			this.$emit('swiperOutOfFocus');
		},
	}
}
</script>

<style lang="scss" scoped>
	.block {
		display: flex;
		justify-content: center;
		align-items: center;

		touch-action: none;
	}
	// swiper
	.swiper {
		&__text {
			font-family: 'Schnyder Cond XL Demi', sans-serif;
			font-size: 125.581px;
			line-height: 108px;
	
			text-align: center;
			font-weight: 600;
			text-transform: uppercase;
			white-space: nowrap;
			
			color: #580300;

			mix-blend-mode: darken;
			user-select: none;
			letter-spacing: 12px;
			
			transition: -webkit-text-fill-color .5s ease, -webkit-text-stroke-width .5s ease, -webkit-text-stroke-color .5s ease;
			z-index: 2;
		}

		&-slide {
			// width: 610px !important;
			width: 45% !important;
			transform: rotate(0deg);
			transition: transform .5s ease;

			&:not(.swiper-slide-active) {
				.swiper__text {
					-webkit-text-fill-color: white;
					-webkit-text-stroke-width: 1px;
					-webkit-text-stroke-color: #580300;
				}
			}

			&-prev {
				transform: rotate(-1.5deg);
			}

			&-next {
				transform: rotate(1.5deg);
			}
		}
	}
	// photos
	.photos {
		position: absolute;
		// top: 50%;
		// left: 50%;
		// transform: translate(-50%, -50%);
		top: calc(50% - (717px / 2));
		left: calc(50% - (1024px / 2));

		width: 1024px;
		height: 717px;
		   
		transform-style: preserve-3d;
		transform: perspective(1200px);

		&__item {
			position: absolute;

			background-position: center center;
			background-repeat: no-repeat;
			background-size: cover;

			transition: opacity .5s ease;

			&.fade {
				&-in {
					transition-delay: .5s;

					z-index: 2;
					pointer-events: all;
				}
				&-out {
					opacity: 0;

					z-index: 1;
					pointer-events: none;
				}
			}

		}

		&__item-wrap {
			position: absolute;

			perspective: 40px;

			// background-position: center center;
			// background-repeat: no-repeat;
			// background-size: cover;

			// transition: opacity .5s ease;

			&_left {
		 		left: 21px;
    			top: 129px;

				// width: 238px;
				// height: 331px;

				transform: rotate(1.1deg) translateZ(10px);
				 
				.photos__item {
					width: 238px;
					height: 331px;
				}
				
			}
			&_right {
				right: 0;
				bottom: 50px;

				width: 345px;
				height: 238px;

				transform: rotate(2.03deg) translateZ(100px);

				.photos__item {
					width: 345px;
					height: 238px;
				}

			}

			&_center {
				top: 50%;
				left: 50%;
				transform: translate3d(-50%, -50%, 50px) rotate(1.5deg);

				width: 476px;
				height: 702px;

				.photos__item {
					width: 476px;
					height: 702px;
				}
				
			}
		}
	}


// media queries
@media (max-width: 1200px) {
	.swiper {
		&__text {
			font-size: 96px;
			line-height: 83px;
		}

		&-slide {
			width: 47% !important;
		}
	}

	.photos {
		width: 727px;
		height: 542px;
		
		&__item-wrap {
			&_left {
		 		left: 14px;
    			top: 109px;

				// width: 163px;
				// height: 226px;

				.photos__item {
					width: 163px;
					height: 226px;
				}
				
			}
			&_right {
				right: 0;
				bottom: 48px;

				width: 234px;
				height: 162px;

				.photos__item {
					width: 234px;
					height: 162px;
				}

			}

			&_center {
				width: 359px;
				height: 530px;

				.photos__item {
					width: 359px;
					height: 530px;
				}
				
			}
		}
	}
}

@media (max-width: 960px) {
	.swiper {
		&-slide {
			width: 65% !important;
			justify-content: center;
		}
	}

	.photos {
		width: 715px;
		&__item-wrap {
			&_left {
				left: 2px;
			}
			&_center {
				left: calc(50% - 6px);
			}
		}
	}
}

@media (max-width: 650px) {
	.swiper {
		&__text {
			font-size: 48px;
			line-height: 41px;
			letter-spacing: 5px;
		}
	}

	.photos {
		width: 300px;
		height: 450px;
		
		&__item-wrap {
			&_center {
				top: calc(50% - 13px);
				left: 50%;
				width: 273px;
				height: 403px;
				.photos__item {
					width: 273px;
					height: 403px;
				}
				
			}
		}
	}
}

@media (max-width: 400px) {

	.swiper {
		&__text {
			font-size: 44px;
			line-height: 38px;

		}
	}

	.photos {
		&__item-wrap {
			height: 369px;
			&_center {
				top: 50%;
				width: 250px;
				height: 369px;
				.photos__item {
					width: 250px;
					height: 369px;
				}
				
			}
		}
	}
}
</style>

