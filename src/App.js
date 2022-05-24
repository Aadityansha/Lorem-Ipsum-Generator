import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const generateIpsum = () => {
    let words = prompt("How to word do you need")
    if (words.length == 0){
      alert("Word count should me more than 0")
    }
    else if (words.length >= 2000){
      alert("Word count cannot be more than 2000")
    }
    else if (!parseInt(words)){
      alert("You Provided string")
    }
    setText(dummyText.substring(0, words))
  }
  const dummyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a turpis tempus, porta diam eget, suscipit enim. Aliquam erat volutpat. Cras semper arcu nec luctus placerat. Nam nec ultrices metus. Nulla non pretium diam. Nullam metus ipsum, aliquam vel malesuada eget, pretium eu urna. Donec sed dui consectetur, aliquet metus et, feugiat orci.
  Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec euismod, ante a fermentum varius, nisi augue consequat ligula, eu congue nisl felis sollicitudin quam. Duis dapibus convallis eros vitae porttitor. Ut venenatis ligula at lectus sagittis placerat in sagittis erat. Cras auctor tortor non dui laoreet, eu mattis justo aliquam. Duis viverra rutrum ante sit amet lacinia. Nulla erat ante, volutpat quis risus at, tincidunt laoreet tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean ullamcorper, mauris pulvinar hendrerit iaculis, metus massa porttitor sapien, sed sodales nisl magna vel ex. Etiam a auctor magna. Nullam egestas a est congue sodales.
  Duis eget quam porttitor, suscipit elit eget, viverra lorem. Nullam condimentum dolor odio, ac blandit arcu efficitur id. Ut aliquam sem iaculis nisi volutpat luctus. Praesent vulputate et metus ut gravida. Etiam porta, massa ut tincidunt feugiat, ante urna efficitur turpis, eget accumsan lorem diam eget nisi. Nam lacus odio, vulputate vitae erat in, ultricies sodales tellus. Donec luctus in ante non aliquet. Phasellus nec pretium tortor. Suspendisse tincidunt quam fermentum augue porta, eget hendrerit neque dignissim. Mauris non eros lorem. Sed ut blandit enim. Vivamus sodales magna vitae aliquam sagittis. Donec luctus enim at suscipit imperdiet. Duis ornare in dolor ac venenatis. Proin urna tellus, pharetra ut purus sit amet, faucibus condimentum nisi. Maecenas metus quam, imperdiet in tellus blandit, molestie viverra est.
  Maecenas a justo in elit auctor posuere sed in nulla. Phasellus lacus metus, ornare eu nibh a, placerat facilisis enim. Praesent aliquam lectus lacus, sit amet pulvinar nulla pulvinar at. Duis non est in diam vestibulum dignissim. Aliquam erat volutpat. Praesent feugiat, nisi gravida dignissim congue, elit felis suscipit libero, vitae vestibulum purus urna vel ex. Suspendisse ut lobortis libero. Sed cursus ex et ipsum volutpat, a sodales felis accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut nec nisl viverra, porta felis et, egestas eros
  Vestibulum elit ligula, pretium et augue vestibulum, vulputate congue ipsum. Aliquam sodales in dolor ut venenatis. Nam non metus orci. Praesent venenatis, dui elementum cursus luctus, ligula eros maximus elit, sit amet cursus ligula sem nec nunc. Quisque ornare felis vel odio commodo fermentum. Ut non ultricies orci. Curabitur eget mattis turpis. Suspendisse ipsum metus, fringilla ac imperdiet sed, hendrerit eu ante
  Integer maximus justo sed sodales consequat. Sed a vehicula eros. Vestibulum ornare eu ex vel egestas. Duis eu fermentum tellus, congue suscipit nisi. Vestibulum lacinia facilisis diam, vel rutrum tortor vestibulum sed. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent interdum aliquet diam id maximus. Quisque hendrerit, tellus non consectetur laoreet, metus est aliquet quam, eu varius sapien lectus non erat. Morbi efficitur blandit erat, a hendrerit ipsum tempus sit amet.
  Sed leo erat, pulvinar sed semper varius, rhoncus at arcu. Proin lacinia ultricies tortor sodales aliquet. Mauris tincidunt, nisi sed pharetra venenatis, sapien turpis gravida risus, vel pulvinar tellus tellus eget sapien. Ut venenatis mollis odio et consequat. Phasellus id consectetur nisi. Maecenas non metus bibendum sem ornare feugiat sed a eros. Vivamus non ipsum odio. Donec tincidunt nunc sit amet neque bibendum porta. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat. Sed aliquam interdum convallis. Nam quam sem, egestas ac semper sit amet, maximus et urna.
  Proin sed nulla finibus, malesuada augue non, auctor lorem. Vivamus accumsan justo nunc, at consectetur mauris feugiat quis. Sed vel accumsan sem, vitae aliquet sapien. Ut aliquet consequat condimentum. Vestibulum vitae velit vitae ligula lacinia scelerisque. Integer a consectetur eros. Proin convallis condimentum augue, vitae blandit lectus egestas eu. Aliquam porttitor auctor nibh.
  Sed aliquet, diam ut scelerisque mattis, dui lectus facilisis diam, eu placerat nisl lectus sit amet est. Cras luctus luctus viverra. In maximus eros sit amet iaculis euismod. Nulla felis velit, feugiat et ornare eget, rutrum non tortor. Pellentesque eu consequat eros. Quisque sollicitudin, risus vitae volutpat dapibus, est diam malesuada mi, sed egestas magna arcu in urna. Proin facilisis leo vel turpis porttitor dapibus. Fusce turpis ante, fermentum ut facilisis vitae, lobortis non arcu. Sed vitae tortor sapien. Maecenas sodales elit nisl, feugiat placerat libero sodales pretium. Mauris et diam sed enim tempus aliquam. Mauris imperdiet augue dui, eget facilisis turpis volutpat quis. Sed tempor convallis ex quis faucibus. Integer tellus dolor, rutrum in viverra egestas, auctor et justo. Aliquam feugiat nec magna feugiat efficitur. Integer euismod faucibus volutpat.
  Suspendisse scelerisque lacus vitae justo convallis, in aliquam risus consequat. Aenean nisi dolor, ornare scelerisque placerat nec, venenatis eu massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ligula magna, pretium ut ligula non, porta lobortis velit. Nulla sed facilisis risus, id mattis mauris. Nullam a tortor non diam tristique viverra. Nam ac purus orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas sagittis sit amet elit a commodo. Nulla at efficitur felis. Etiam ipsum urna, dapibus et auctor nec, congue vel nunc. Vestibulum nec tincidunt magna, non varius lacus.
  Integer et justo ultricies, efficitur ante pretium, rutrum lorem. Etiam magna ex, pulvinar non neque nec, luctus viverra leo. Ut a aliquam nunc. Maecenas mollis risus sed tristique lobortis. Aliquam vitae ex dolor. Quisque fringilla, diam a eleifend sollicitudin, mi magna malesuada neque, sit amet feugiat lorem ligula sed purus. Pellentesque ex lectus, viverra vel urna vel, volutpat elementum odi
  Donec sit amet dolor tempus nunc lobortis luctus. Quisque et velit porttitor, placerat dui vitae, dictum sem. Vivamus laoreet scelerisque pellentesque. Donec viverra lorem vel neque consectetur interdum. Curabitur velit sapien, volutpat nec faucibus quis, vehicula volutpat ante. Aenean tempus luctus sem, ac gravida neque fringilla in. Sed gravida ex sit amet blandit suscipit. Vivamus sagittis augue arcu, vel pulvinar libero laoreet at. Etiam condimentum dignissim ornare. Nam non quam dapibus, tempor ex nec, venenatis purus. Nam neque mauris, pharetra ac purus in, malesuada placerat metus.
  Mauris aliquet odio nisi, sit amet pharetra neque posuere at. Aenean aliquam dictum nisl. Suspendisse sed neque sollicitudin, suscipit sem eget, eleifend elit. Donec ultrices nulla ut ex lobortis tincidunt. Aenean id metus nulla. Sed vestibulum tincidunt finibus. Nullam risus odio, feugiat sed ante id, fringilla mattis sem. Aliquam odio urna, scelerisque in leo quis, pretium semper nisl. Sed porttitor nibh vitae sapien dignissim, ut suscipit orci ultricies. Ut id aliquet purus. Fusce scelerisque porttitor est, quis ultricies purus placerat vel. Morbi laoreet lectus lectus, eget semper diam venenatis eu. Integer dignissim maximus diam, ut mattis ligula laoreet vitae. Suspendisse maximus mauris odio, eget blandit dui commodo sagittis.
  Morbi quis nulla a dolor consequat viverra rhoncus a nibh. Mauris non iaculis felis, non imperdiet augue. Integer ut tellus ligula. Nunc accumsan at libero in rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum molestie faucibus tempus. Sed nec tincidunt odio. Praesent in ipsum quis eros varius semper vel non mauris. Nunc vehicula elit sapien, et lobortis tellus sodales at. Etiam pharetra dolor tellus, ut pulvinar nisl ultricies vel. Fusce vel tincidunt libero. Morbi mattis enim quis blandit interdum. Quisque congue libero sem, a bibendum nulla blandit eu. Sed non pellentesque nisl. Suspendisse vehicula ornare dui, et eleifend dolor fringilla in. Sed accumsan mauris eget pharetra efficitur.
  Nunc suscipit lorem lectus, rhoncus elementum ipsum iaculis id. Nulla ac nunc imperdiet, egestas tortor in, viverra tellus. Nullam lacinia fringilla iaculis. Phasellus porttitor, orci id mollis sodales, leo orci aliquam magna, ac accumsan libero lacus non tortor. Maecenas maximus varius lobortis. Fusce tempus odio sodales lectus ornare volutpat. Fusce dui lacus, commodo quis quam at, tristique ultrices tellus. Praesent eros libero, pretium ac est sollicitudin, efficitur aliquam ipsum. Integer in metus diam. Suspendisse placerat sed erat in placerat.
  Aliquam tempor quis diam non suscipit. Proin nunc enim, semper sit amet ante at, tincidunt vehicula est. Mauris facilisis est metus, et mattis lectus suscipit sed. Proin sagittis eget purus in aliquet. Donec rhoncus sapien et nisl fermentum, vitae scelerisque purus ullamcorper. Donec dictum sed ligula ac lobortis. Morbi condimentum vel ante vel scelerisque. Maecenas ullamcorper libero risus, a ullamcorper purus cursus nec. Nunc rhoncus pulvinar venenatis. Nullam efficitur porta vestibulum. Cras et dignissim erat. Nullam dapibus eros eget ipsum dictum, in cursus quam consectetur. Pellentesque eleifend justo a neque rutrum, vitae laoreet lectus ullamcorper. Cras consequat ex viverra, bibendum nisi nec, feugiat libero. In dictum felis erat, vitae dictum magna congue ut.
  Ut elementum sagittis pharetra. Sed gravida diam sit amet tempor viverra. Curabitur arcu eros, tincidunt non ante ac, vehicula blandit lacus. Praesent a nisl sed magna venenatis fringilla eu nec urna. Cras et quam at purus fringilla interdum id sit amet purus. Quisque ultrices id urna vitae hendrerit. Ut vel mollis ipsum, vehicula accumsan justo. Nam id venenatis neque, vel sagittis augue. Duis risus diam, finibus eget mi quis, sollicitudin commodo nulla.
  Curabitur suscipit tempus augue ac commodo. Nulla vel ultrices mauris. Phasellus aliquet nunc arcu, ut laoreet nunc dignissim quis. Etiam non lectus ultricies, ultricies lorem sit amet, porttitor justo. Donec vel fringilla lacus, eget accumsan velit. Ut libero turpis, viverra id lorem id, ultricies imperdiet diam. Donec viverra nec justo ornare vulputate. Cras id neque ex. Maecenas condimentum massa purus, vel maximus leo scelerisque imperdiet. Mauris ut tempor ante. Cras luctus vitae mauris sit amet sollicitudin. Nunc pulvinar sem ut nunc molestie pellentesque. Nam volutpat eros lorem, eget blandit metus placerat mattis. Mauris posuere ipsum tincidunt turpis viverra, vel volutpat justo tristique. Mauris porta convallis nisi vitae pretium. Curabitur feugiat molestie erat sed bibendum.
  Phasellus eget nisi tempor, vestibulum arcu vel, pretium augue. Mauris dignissim vitae urna a auctor. Curabitur at quam at tortor lacinia ultricies quis nec turpis. Aliquam non erat vel nisi auctor blandit eget eu ligula. Nam quis ante nibh. Nullam dapibus rhoncus lacus eu imperdiet. Quisque sit amet sagittis risus, a ornare purus. Vivamus ac tincidunt ligula, vel malesuada orci. Aliquam fermentum odio in augue viverra rutrum. Ut lorem dolor, tempus finibus nisi quis, placerat mattis lorem. Morbi ac lorem justo. Suspendisse dapibus neque ac auctor dignissim. Aenean sodales enim non rhoncus laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce vulputate dolor id velit iaculis, sit amet aliquam diam lacinia. Nullam id eleifend ex, in venenatis nulla.
  Quisque ultrices sed erat vel vulputate. Phasellus sed nisi ac lectus semper malesuada. Etiam a eros facilisis, venenatis mi sit amet, bibendum tortor. In mattis purus in libero suscipit dignissim. Nam euismod volutpat mi, in rutrum dolor tempor a. Suspendisse potenti. Vestibulum sit amet hendrerit lorem, id mattis ex. Praesent iaculis ut urna ac aliquet. Nulla facilisi. Etiam in laoreet magna. Vestibulum dignissim justo eget elit mollis, eu ultrices ex aliquam. Etiam non lorem ultricies, sagittis magna non, porttitor turpis. Nullam efficitur tempus ornare. Proin ut metus nec nibh mattis accumsan at accumsan ipsum. Vestibulum sollicitudin dui id ligula sollicitudin elementum non ac tellus.
  Suspendisse potenti. Nulla imperdiet tortor laoreet turpis facilisis, sit amet tincidunt dui scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In nec leo at elit pulvinar auctor at ultricies ex. Cras scelerisque dolor at ultricies euismod. Nulla quis mi eget augue finibus vestibulum. Nunc sit amet augue sit amet ligula ultricies varius. Mauris interdum lectus tortor, eu convallis eros auctor a. Aliquam consequat justo ipsum, vitae hendrerit turpis pulvinar non. Donec maximus, risus sed pulvinar sodales, ex sapien tincidunt nisl, ut porta erat ex a leo. Sed a risus.`
  
  return (
    <>
      <section className="text-gray-600 body-font">
      <h1 className='text-center font-bold text-3xl mt-10'>Lorem Ipsum generator</h1>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Click on Generate
            </h1>
            <p className="mb-8 leading-relaxed">As a developer we have to use dummy text on our app, website in order to make content quickly on our app. Lorem Ipsum generator makes it easy.</p>
            <div className="flex justify-center">
              <button onClick={generateIpsum} className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Generate</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <textarea className="object-cover object-center rounded h-80 w-full rounded text-lg p-2" style={{border: "2px solid #000", resize: "none"}} value={text} readOnly={true}></textarea>
          </div>
        </div>
      </section>
      <p className='text-center mt-12'>By <a href="https://github.com/Aadityansha" target="_blank" className='font-bold'>Aadityansha Patel</a>. fork on <a className='font-bold' href="" target='_blank'>Github</a></p>
    </>
  )
}

export default App
