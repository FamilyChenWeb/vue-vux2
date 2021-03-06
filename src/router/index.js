import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/login'
import Home from '@/views/home/home'
import Registered from '@/views/registered/registered'
import AnnouncementList from '@/views/announcement/announcementList'
import Announcement from '@/views/announcement/announcement'
import Membership from '@/views/member/membership'
import Payment from '@/views/member/payment'
import PaymentSuccess from '@/views/member/paymentSuccess'
import Proposal from '@/views/proposal/proposal'
import MyProposal from '@/views/proposal/myProposal'
import ReceivingAddress from '@/views/receivingAddress/receivingAddress'
import NewAddress from '@/views/receivingAddress/newAddress'
import TurnOut from '@/views/turnOut/turnOut'
import TurnOutRecord from '@/views/turnOut/turnOutRecord'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/home',
          component: Home
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registered',
      name: 'registered',
      component: Registered
    },
    {
      path: '/announcementList',
      name: 'announcementList',
      component: AnnouncementList
    },
    {
      path: '/announcement',
      name: 'announcement',
      component: Announcement
    },
    {
      path: '/membership',
      name: 'membership',
      component: Membership
    },
    {
      path: '/payment',
      name: 'payment',
      component: Payment
    },
    {
      path: '/paymentSuccess',
      name: 'paymentSuccess',
      component: PaymentSuccess
    },
    {
      path: '/proposal',
      name: 'proposal',
      component: Proposal
    },
    {
      path: '/myProposal',
      name: 'myProposal',
      component: MyProposal
    },
    {
      path: '/receivingAddress',
      name: 'receivingAddress',
      component: ReceivingAddress
    },
    {
      path: '/turnOut',
      name: 'turnOut',
      component: TurnOut
    },
    {
      path: '/turnOutRecord',
      name: 'turnOutRecord',
      component: TurnOutRecord
    },
    {
      path: '/newAddress',
      name: 'newAddress',
      component: NewAddress
    },
  ]
})
