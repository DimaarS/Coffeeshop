$(document).ready(function(){
      let date=new Date()
      $('#demo').html(date.getDay()+"."+(date.getMonth()+1)+'.'+date.getFullYear());

      $('#bars ,#close').click(function(){
            $('.phone_menu ').fadeToggle(100);
      })
})