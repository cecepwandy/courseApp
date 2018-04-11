import Vue from 'vue'

import PostList from '@/components/Posts/PostList';
import AdminPostForm from '@/components/Admin/AdminPostForm';
import AppControlInput from '@/components/UI/AppControlInput'
import AppButton from '@/components/UI/AppButton'
import PostPreview from '@/components/Posts/PostPreview'

Vue.component('PostList',PostList)
Vue.component('AdminPostForm',AdminPostForm)
Vue.component('AppControlInput',AppControlInput)
Vue.component('AppButton',AppButton)
Vue.component('PostPreview',PostPreview)
