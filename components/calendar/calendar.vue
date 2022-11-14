<template>
	<view class="cal">
		<view class="cal-top">
			<text ref="t1">{{nowSelectDateString}}</text>
		</view>

		<view class="cal-content">
			<view class="cal-ul cal-weeks">
				<view class="cal-li" v-for="(item,i) of baseData.weekTitles" :key="i">
					<text>{{item}}</text>
				</view>
			</view>

			<swiper :current="current" ref="calSwiper" class="cal-swiper" :duration="200" circular @animationfinish="swiperFisnish">
				<swiper-item v-for="(days,i) of weeks" :key="i">
					<view class="cal-ul cal-days">
						<view class="cal-li" v-for="(item,j) of days" :key="j" @click="changeSelected(item)">
							<view class="cal-day-li" :class="{'cal-day-li-selected':item.timeSpan == baseData.selectedDate.timeSpan}">
								<text>{{item.d}}</text>
							</view>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>

		<!-- <pgb-tabbar ref="t2"></pgb-tabbar> -->
	</view>
</template>

<script>
	/**
	 * weekCalendar 周日历选择组件
	 * @description 日历选择某一天的组件
	 * @bug 因是使用swiper组件开发快速滑动多屏 无法触发 @animationfinish 导致展示异常
	 * @property {Number} defaultDate 默认时间时间戳
	 * @event {Function} changeDate 当前选中日期发生改变
	 * @example <chenmushan-week-calendar @changeDate="changeDate"></chenmushan-week-calendar>
	 */
	export default {
		props: {
			defaultDate: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				weeks: [],
				propDate: null,
				current: 0,
				baseData: {
					weekTitles: ['日', '一', '二', '三', '四', '五', '六'],
					current: 0,
					selectedDate: {
						d: null, // 在当前月份中的天
						ym: '', // 年月拼接
						timeSpan: 0, // 时间戳
					}
				}
			};
		},
		mounted() {
			this.propDate = this.defaultDate == 0 ? new Date() : new Date(this.defaultDate);
			this.initData();
		},
		methods: {
			initData() {
				let lastSat = new Date(this.propDate);
				let month = lastSat.getMonth()+1<10 ? "0"+(lastSat.getMonth()+1) : lastSat.getMonth()+1
				this.$set(this.baseData, 'selectedDate', {
					d: lastSat.getDate(),
					ym: `${lastSat.getFullYear()}-${month}-${lastSat.getDate()}`,
					timeSpan: +lastSat,
					m: new Date(lastSat)
				});

				// 寻找到距离当前日期最近的周六
				while (lastSat.getDay() != 6) lastSat.setDate(lastSat.getDate() + 1);

				this.$set(this.weeks, 0, this.getWeekDaysByLastSat(lastSat));
				this.$set(this.weeks, 1, this.getWeekDaysByWeeks(this.weeks[0], true));
				this.$set(this.weeks, 2, this.getWeekDaysByWeeks(this.weeks[0], false));
				//console.log(this.weeks)
				this.current = 0;
			},
			swiperFisnish(e) {
				let current = e.detail.current;
				this.changeWeeks(current > this.baseData.current, current);
				this.$set(this.baseData, 'upCurrIndex', current);
			},
			changeWeeks(direction, current) {
				console.log(current)
				let nextIndex = current + 1 > 2 ? 0 : current + 1;
				let prevIndex = current - 1 < 0 ? 2 : current - 1;
				this.$set(this.weeks, nextIndex, this.getWeekDaysByWeeks(this.weeks[current], true));
				this.$set(this.weeks, prevIndex, this.getWeekDaysByWeeks(this.weeks[current], false));
			},
			// 通过周六数据获取一周的数据
			getWeekDaysByLastSat(lastSat) {

				lastSat = new Date(lastSat);
				let reuslt = [];
				let month = lastSat.getMonth()+1<10 ? "0"+(lastSat.getMonth()+1) : lastSat.getMonth()+1
				for (var i = 0; i < 7; i++) {
					reuslt.push({
						d: lastSat.getDate(),
						ym: `${lastSat.getFullYear()}-${month}-${lastSat.getDate()}`,
						timeSpan: +lastSat,
						m: new Date(lastSat)
					});

					lastSat.setDate(lastSat.getDate() - 1)
				}

				return reuslt.reverse();
			},
			// 通过一周的数据获取本周的上周或下周
			getWeekDaysByWeeks(weeks, direction) {
				// 下周
				if (direction) {
					let nextLastSat = new Date(weeks[weeks.length - 1].timeSpan);
					nextLastSat.setDate(nextLastSat.getDate() + 7);
					return this.getWeekDaysByLastSat(nextLastSat)
				}
				// 上周
				else {
					let prevLstSat = new Date(weeks[0].timeSpan);
					prevLstSat.setDate(prevLstSat.getDate() - 1);
					return this.getWeekDaysByLastSat(prevLstSat)
				}
			},
			// 修改当前选中
			changeSelected(item) {
				console.log('item::', item);
				if (this.baseData.selectedDate.timeSpan != item.timeSpan) {
					this.$set(this.baseData, 'selectedDate', {
						...item,
						m: new Date(item.timeSpan)
					});

					this.$emit('changeDate', this.baseData.selectedDate);
				}
			}
		},
		computed: {
			nowSelectDateString() {
				let m = this.baseData.selectedDate.m;
				return m ? `${m.getFullYear()}年${m.getMonth() + 1 }月${m.getDate()}日` : '';
			}
		},
		watch: {
			defaultDate: {
				handler(newVal, oldVal) {
					this.propDate = this.defaultDate == 0 ? new Date() : new Date(this.defaultDate);
					this.initData();
				},
				immediate: true
			}
		},
	}
</script>

<style lang="scss" scoped>
	view{
		line-height: 1.8;
	}
	.cal {
		width: 100%;
		height: 254rpx;
		background: #004343;
		margin: 0 auto;
		overflow: hidden;
		position: fixed;
		padding-bottom:40rpx;
		z-index: 999;
	}

	.cal-top {
		width: 100%;
		height: 91rpx;
		background: #004343;
		border-radius: 30rpx 30rpx 0rpx 0rpx;
		line-height: 91rpx;
		text-align: center;

		text {
			font-size: 34rpx;
			font-family: PingFang SC, PingFang SC-Bold;
			font-weight: 700;
			color: #ffffff;
		}
	}

	.cal-content {
		padding: 0 0 40rpx;
		line-height: 1 !important;
	}

	.cal-swiper {
		margin-top: 20rpx;
	}

	.cal-ul {
		position: relative;
		display: flex;
		justify-content: space-between;

		.cal-li {
			width: calc(100% / 7);
			text-align: center;
			margin-top: 10rpx;
			font-size: 24rpx;
		}
	}

	.cal-weeks {
		font-size: 28rpx;
		font-weight: 700;
		color: #00696a;
	}

	.cal-days {
		font-size: 30rpx;
		color: #333;
	}

	.cal-day-li {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 63rpx;
		height: 63rpx;
		margin: 0 auto;
		color: #FFFFFF;
		font-size: 24rpx;
	}

	.cal-day-li-selected {
		background-color: #0060C9;
		margin-top: -8rpx;
		height: 76rpx;
		width: 60rpx;
		border-radius: 30rpx;
		color: #fff !important;
	}
</style>
