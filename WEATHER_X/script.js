const form=document.querySelector('.input-form')
const submit=document.querySelector('#submit')
let citypp =document.querySelector('.city-not-found');
let city_name
form.addEventListener('submit',function(e){
    e.preventDefault()
    city_name=document.querySelector('#city').value
    if(/^[A-Za-z\s]+$/.test(city_name)){
    form.style.display="none"
    citypp.innerHTML="<p></p>"
    city_name.trim()

    fetchWeather(city_name)
    }
    else{
        
        document.querySelector('.invalid-city').innerHTML="Please enter a valid city !!"
        document.querySelector('#city').value = '';
        citypp.innerHTML=""
        
    }
    
})
function fetchWeather(city_name){
    console.log(city_name)

async function weatherApi() {
    try {
         loader.style.display = 'block';
        const response=await fetch(`https://api.weatherapi.com/v1/current.json?key=0041eaae74c54879ac2152031251706&q=${city_name}&aqi=no`)
    const final_resp= await response.json()
     loader.style.display = 'none';
    
    if(final_resp.error){
         console.log(final_resp)
        // document.querySelector('.after-click').style.display="flex"

        const afterClick = document.querySelector('.after-click');
afterClick.classList.remove('show');
void afterClick.offsetWidth;
afterClick.classList.add('show');

         citypp.innerHTML="<p>Location not found. Try Again !!</p>"
         document.querySelector('#city').value=''
         form.style.display="flex"
         document.querySelector('.again').style.display="none"
         document.querySelector('.invalid-city').innerHTML=""



    }

    else{
        document.querySelector('.again').style.display="block"
        //document.querySelector('.after-click').style.display="flex"
        // Show the animated container
const afterClick = document.querySelector('.after-click');
afterClick.classList.remove('show'); // reset
void afterClick.offsetWidth; // force reflow
afterClick.classList.add('show');

// Show all .weath blocks with delay
document.querySelectorAll('.weath').forEach((div, index) => {
    div.classList.remove('show');
   
    void div.offsetWidth;
    div.classList.add('show');
});
//+++++++++++++++++++++++++
        document.querySelectorAll('.weath').forEach(div => {
        div.style.display = "grid";
    });
         console.log(final_resp)
         const main=document.querySelector(".main-box")
         let w=final_resp.current.condition.code
         let bg_img;
         if (final_resp.current.is_day===1) {
            
                if(w==1030||w==1135||w==1147){
                    bg_img="/WEATHER_X/images/mist-day.jpg"}
                    

                else if(w==1003 || w==1006||w==1009){
                    bg_img="/WEATHER_X/images/overcast-day.jpg"}
                    
            

                  else if(w==1063||w==1180||w==1183||w==1246||w==1273||w==1276||w==1150||w==1153||w==1240||w==1186||w==1192){
                    bg_img="/WEATHER_X/images/rainy-day.jpg"}
                    
             
                    else if(w==1000){
                    bg_img="/WEATHER_X/images/sunny-day.jpg"}
                

                     else if(w==1066||w==1258||w==1279||w==1282||w==1210||w==1213||w==1216||w==1219||w==1255){
                    bg_img="/WEATHER_X/images/snow-day.jpg"}
                    
                      else if(w==1087||w==1273||w==1276||w==1279||w==1282){
                    bg_img="/WEATHER_X/images/thunder-day.jpg"}
                    
            
                
                    else{
                        bg_img="/WEATHER_X/images/main-bg.jpg"
                    }
                    
            }
          
            
          else {
             if(w==1030||w==1135||w==1147){
                    bg_img="/WEATHER_X/images/mist-night.jpg"}
                    

                else if(w==1003 || w==1006||w==1009){
                    bg_img="/WEATHER_X/images/cloudy-night.jpg"}
                    
            

                  else if(w==1063||w==1180||w==1183||w==1246||w==1273||w==1276||w==1150||w==1153||w==1240||w==1186||w==1192){
                    bg_img="/WEATHER_X/images/rainy-night.jpg"}
                    
             
                    else if(w==1000){
                    bg_img="/WEATHER_X/images/clear-night.jpg"}
                

                     else if(w==1066||w==1258||w==1279||w==1282||w==1210||w==1213||w==1216||w==1219||w==1255){
                    bg_img="/WEATHER_X/images/snow-night.jpg"}
                    
                      else if(w==1087||w==1273||w==1276||w==1279||w==1282){
                    bg_img="/WEATHER_X/images/thunder-night.jpg"}
                    
            
                
                    else{
                        bg_img="/WEATHER_X/images/main-bg.jpg"
                    }
                    
            
         }

         main.style.backgroundImage = `url('${bg_img}')`


         
         







        let city=document.querySelector('#name')
        let time=document.querySelector('#time')
        let lat_log=document.querySelector('#lat-log')
        let temp=document.querySelector('#temp')
        let feels_like=document.querySelector('#feels-like')

        let condn=document.querySelector('#condn')

        let humid=document.querySelector('#humid')
        let visi=document.querySelector('#visi')
         let wind=document.querySelector('#wind')
        city.innerHTML=`${final_resp.location.name}, ${final_resp.location.region}, ${final_resp.location.country}`
        time.innerHTML=`Localtime: ${final_resp.location.localtime}`
        lat_log.innerHTML=`Lat: ${final_resp.location.lat}, Lon: ${final_resp.location.lon}`
        temp.innerHTML=`Temp: ${final_resp.current.temp_c}°C / ${final_resp.current.temp_f}°F`
        feels_like.innerHTML=`Feels Like: ${final_resp.current.feelslike_c}°C / ${final_resp.current.feelslike_f}°F`
        condn.innerHTML=`${final_resp.current.condition.text}`
        wind.innerHTML=`Wind: ${final_resp.current.wind_kph} km/hr`
        humid.innerHTML=`Humidity: ${final_resp.current.humidity}%`
        visi.innerHTML=`Visibility: ${final_resp.current.vis_km} km`

        const again=document.querySelector('.again')
        again.addEventListener('click',function(){
           
             document.querySelector('#city').value=''
        
             main.style.backgroundImage = `url('/WEATHER_X/images/main-bg.jpg')`

         
         city.innerHTML=""
        time.innerHTML=""
        lat_log.innerHTML=""
        temp.innerHTML=""
        feels_like.innerHTML=""
        condn.innerHTML=''
        wind.innerHTML=""
        humid.innerHTML=""
        visi.innerHTML=""
         document.querySelectorAll('.weath').forEach(div => {
        div.style.display = "none";
        again.style.display="none"
        document.querySelector('.invalid-city').innerHTML=""

        form.style.display="flex"
       form.classList.remove('form-show'); // reset animation
       void form.offsetWidth; // force reflow
       form.classList.add('form-show');

    });


        })






        





    }
   
   


   
        
    }catch(error){
       


    }
    

    
}
weatherApi()
        }
        
