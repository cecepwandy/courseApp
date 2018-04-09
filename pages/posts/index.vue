<template>
	<div class="posts-page">
		<PostList :posts="loadedPosts"/>
	</div>
</template>
<script>
import PostList from '@/components/Posts/PostList'
export default{
	components: {
		PostList,
	},
	asyncData(context) {
		return new Promise((resolve,reject) => {
			setTimeout(() => {
				resolve({
					loadedPosts: [
						{
							id: '1',
							title: 'first Post',
							previewText: 'this is our fist post',
							thumbnail:
							'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg',
						},
						{
							id: '2',
							title: 'second Post',
							previewText: 'this is our second post',
							thumbnail:
							'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg',
						},
					]
				})
			},1000);
		})
			.then(data=>{
				return data
			})
			.catch(e =>{
				contex.error(e)
			})
	},
	created() {
		this.$store.dispatch('setPosts', this.loadedPosts)
	}
}
</script>

<style scoped>
.posts-page {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>

