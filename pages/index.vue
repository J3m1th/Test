<template lang="pug">
	.block
		.block__decoration
		.cursor.block__g-cursor(:class="[{ 'cursor_hover': hover }, {'cursor_hide': hideCursor} ]")
			.cursor__circle(:style="cursorCircle" :class="{'show-caption' : isShow}")
		main-header
		main-content(@swiperInFocus="showCaption" @swiperOutOfFocus="hideCaption")
		main-footer
</template>

<script>
import header from '~/components/header.vue';
import content from '~/components/main/content.vue';
import footer from '~/components/footer.vue'

export default {
	components: {
		'main-header': header,
		'main-content': content,
		'main-footer': footer
	},

	data() {
		return {
			isShow: false,

			xChild: 0,
			yChild: 0,
			xParent: 0,
			yParent: 0,
			hover: false,
			hideCursor: true
		}
	},

	computed: {
		cursorCircle() {
			return `transform: translateX(${this.xParent}px) translateY(${this.yParent}px) translateZ(0) translate3d(0, 0, 0);`
		},

		cursorPoint() {
			return `transform: translateX(${this.xChild - 3}px) translateY(${this.yChild - 3}px) translateZ(0) translate3d(0, 0, 0);`
		}
	},

	mounted() {
		document.addEventListener("mousemove", this.moveCursor);

		document.addEventListener('mouseleave', e => {
			this.hideCursor = true;
		});
		document.addEventListener('mouseenter', e => {
			this.hideCursor = false;
		});
	},

  	methods: {
		moveCursor(e) {
			this.xChild = e.clientX;
			this.yChild = e.clientY;

			setTimeout(() => {
				this.xParent = e.clientX - 8.5;
				this.yParent = e.clientY - 8.5;
			}, 100);
		},

		showCaption() {
			this.isShow = true;
		},

		hideCaption() {
			this.isShow = false;
		},

	},

}
</script>

<style lang="scss" scoped>

.block {
	height: 100vh;
	overflow: hidden;
	position: relative;

	cursor: none;

	&__decoration {
		position: absolute;
		top: 6px;
   		left: calc(50% + 57px);
		transform: translateX(-50%);

		width: 610px;
		height: 730px;

		background-image: url('../static/img/main/bg-decoration.svg');
		background-position: center center;
		background-repeat: no-repeat;
		background-size: contain;

		z-index: -1;
	}
}
// custom cursor
.cursor {

    &__circle {
		position: fixed;
		top: 0;
		left: 0;

		width: 17px;
		height: 17px;
		border: 1px solid rgba(#000, .4);
		border-radius: 100%;
		
		backface-visibility: hidden;
		transition: opacity .5s ease;
		pointer-events: none;
		user-select: none;

		z-index: 3;

		&::after {
			content: 'Drag me';
			position: absolute;
			top: -10px;
    		right: -40px;


			font-family: 'TT Travels', sans-serif;
			font-size: 8px;
			font-weight: 400;
			line-height: 10px;
			white-space: nowrap;
			letter-spacing: 0.02em;
			text-transform: uppercase;
			color: #000;

			opacity: 0;
			transition: opacity .5s ease;
		}

		&.show-caption {
			&::after {
				opacity: 1;
			}
		}
	}
}

// media queries
@media (max-width: 1200px) {
	.block {
		&__decoration {
			top: 30px;
			left: 50%;
			width: 506px;
    		height: 605px;
		}
	}
}

@media (max-width: 960px) {
	.block {
		&__decoration {
			top: 65px;
			width: 628px;
    		height: 789px;
		}
	}
}

@media (max-width: 650px) {
	.block {
		&__decoration {
			top: 38px;
			width: 392px;
    		height: 493px;
		}
	}
}
@media (max-width: 400px) {
	.block {
		&__decoration {
			top: 50px;
			width: 339px;
    		height: 429px;
		}
	}
}

</style>

