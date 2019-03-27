import $ from 'jquery'
import './css/index.css'
//引入node_modules 中的内容的时候可以省略node_modules 直接些里面的内容
import 'bootstrap/dist/css/bootstrap.css'
$(function(){
    $('li:odd').css("background-color", "gray")
})
