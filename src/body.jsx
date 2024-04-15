import img1 from './images/00.png'
import img2 from './images/pr.png'
import img3 from './images/01.png'
import img4 from './images/02.png'
import img5 from './images/03.png'
import img6 from './images/04.png'
import img7 from './images/Logo1.png'
import img8 from './images/galch.png'
import img9 from './images/05.png'
import img10 from './images/06.png'
import img11 from './images/07.png'
import img12 from './images/Video.png'
import img13 from './images/Mark.png'
import img14 from './images/Xmark.png'
import img15 from './images/08.png'
import img16 from './images/plus.png'
import img17 from './images/p1.png'
import img18 from './images/p2.png'
import img19 from './images/p3.png'


const Body=()=>{
    return(
        <div>

            <div className="relative inline-block items-center justify-center  ">
                <img src={img1} alt="" className='ml-5'/>
                <div className="absolute top-[20%] right-[50%] w-[600px] h-[200px]">
                    <p className='text-[40px] text-white font-bold'>Подмосковная резиденция <br />"ЛЕСНАЯ УСАДЬБА"</p>
                    <p className='text-white text-[20px] font-thin'>Пансионат для пожилых премиум-класса</p>
                </div>
                <div className='absolute bottom-[10%] left-[10%]'>
                    <ul className='flex items-center justify-between gap-[200px]'>
                        <li className='text-white'>Для тех, кто любит <br /> своих родных и близких</li>
                        <li className='text-white list-image-[url(img1)]'> Безопасная среда <br /> и интересный досуг</li>
                        <li className='text-white list-image-[url(img1)]'>Долгосрочные и краткосрочные <br /> программы пребывания</li>
                    </ul>
                </div>
            </div>
            <div className='flex max-w-[1350px] h-[600px]'>
                <div className='w-[50%] overflow-none'>
                    <div className=' ml-12 mt-[100px]'>

                    <pre className='text-[30px] text-slate-700 font-[100]'>Мы стремимся создать
                        для вас <span className='font-bold'> <br />комфортные
                        условия проживания </span></pre>
                        <br />
                    <pre className='text-[18px] text-slate-700 '>
                        Загородный пансионат предлагает <br />
                        комфортное пространство для пожилых <br />
                        людей и инвалидов для долговременного <br />
                        проживания.
                        <br /> <br />
                        Мы помогаем людям c возрастными <br /> 
                        особенностями здоровья жить без стресса <br /> 
                        и боли, сохранять душевное равновесие и <br />
                        теплые отношения c близкими</pre>
                    </div>
                </div>
                <div>
                    <img src={img2} alt="" className='h-[550px]' />
                </div>
            </div>
            <div className='flex items-center justify-center flex-col'>
                <div className=''>
                    <p className='text-slate-500 text-[40px] font-[300]'>Мы предлагаем 
                    <span className='font-[400] text-slate-600'>уютные комнаты c удобной мебелью <br /> 
                    и всем необходимым для комфортного проживания</span></p>        
                </div>
                <div className='flex items-center justify-center  w-[100%]' >
                    <div className='relative flex items-center justify-center w-[50%] h-[600px] gap-[20px]'>
                        <div className=''>
                            <div className='mb-[20px] mt-[60px] w-[200px]'>
                                <img src={img3} alt="" />
                            </div>
                            <div className='w-[200px]'>
                                <img src={img4} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className='w-[200px]  mb-[20px]'>
                                <img src={img5} alt="" />
                            </div>
                            <div className='w-[200px]'>
                                <img src={img6} alt="" />
                            </div>
                        </div>
                        <div className='absolute w-[150px]'>
                            <img src={img7} alt="" />
                        </div>
                    </div>

                    <div className='grid grid-cols-2 grid-rows-3 h-[600px] w-[50%] flex items-center justify-center'>
                        <div className='flex items-start justify-center  gap-3'>
                            <div ><img src={img8} alt="" className='w-[40px]' /></div>
                            <div className='flex  flex-col' >
                                <p>Медицинское <br /> обслуживание</p>
                                <p className='text-[12px] text-slate-400 mt-3'>Квалифицированная команда <br /> врачей: невролог, реабилитолог,<br /> терапевт, психолог и психиатр</p>
                            </div>
                        </div>
                        <div className='flex items-start justify-center gap-3'>
                            <div><img src={img8} alt="" className='w-[45px]' /></div>
                            <div>
                                <p>Справедливые <br /> цены</p>
                                <p className='text-[12px] text-slate-400 mt-3'>Честные и прозрачные цены <br />без обмана, лучшее соотношение <br /> цены и качества</p>
                            </div>
                        </div>
                        <div className='flex items-start justify-center gap-3'>
                            <div><img src={img8} alt="" className='w-[45px]' /></div>
                            <div >
                                <p>Забота и внимание <br /> к каждому</p>
                                <p className='text-[12px] text-slate-400 mt-3'>Наша резиденция для тех, <br /> кто действительно любит <br /> своих родных и близких</p>
                            </div>
                        </div>
                        <div className='flex itemsstartr justify-center gap-3'>
                            <div><img src={img8} alt="" className='w-[45px]' /></div>
                            <div >
                                <p>Уникальное <br /> расположение</p>
                                <p className='text-[12px] text-slate-400 mt-3'>Между Новорижским и Рублево- <br />Успенским шоссе, что обеспечивает <br /> комфортную транспортную доступность</p>
                         </div>
                        </div>
                        <div className='flex items-start justify-center  gap-3'>
                            <div><img src={img8} alt="" className='w-[45px]' /></div>
                            <div >
                                <p>Новый и современный <br /> пансионат</p>
                                <p className='text-[12px] text-slate-400 mt-3'>Только открывшаяся резиденция,<br /> c авторским дизайном <br />и безбарьерной средой</p>
                            </div>
                        </div>
                        <div className='flex items-start justify-center  gap-3'>
                            <div><img src={img8} alt="" className='w-[45px]' /></div>
                            <div >
                                <p>Окружение <br /> района</p>
                                <p className='text-[12px] text-slate-400 mt-3'>Пансионат окружен лесом,<br /> располагается на территории <br /> коттеджного поселка бизнес-класса</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='h-[80px] flex items-center justify-around'>
                    <p className='text-[40px] font-[300] text-slate-500'>Вы получите 
                        <span className='text-slate-500 font-[350]'>незабываемые <br /> впечатления в нашей резиденции</span>
                    </p>
                    <button className='w-[250px] h-[75px] borde-none bg-lime-700 rounded-[30px]'>Записаться на экскурсию</button>
                </div>
                <div className='w-[100%] h-[600px] flex items-center justify-center gap-10'>
                    <img src={img9} alt="" />
                    <img src={img10} alt="" className='rounded-[20px]' />
                    <img src={img11} alt="" />                
                </div>
                <p className='text-[20px] text-center mb-4'>Уютные комнаты отдыха</p>
                <div className='flex justify-center'>
                    <img src={img12} alt="" />
                </div>
            </div>

            <div className='w-[100%] flex justify-center gap-[30px] flex-col'>
                <div className='flex justify-center'>
                    <p className='text-slate-500 text-[40px] font-[350]'>Мы предлагаем нашим резидентам 
                        <span className='text-slate-700 font-[400]'> безопасную среду, <br /> медицинское сопровождение и интересный досуг</span>
                    </p>
                </div>
                <div className='w-[100%] flex'>
                    <div className='w-[60%]  ' >
                        <div className='flex justify-center gap-[150px]'> 
                            <div>
                                <p className='text-[20px]'>программа</p>
                                <p className='text-[36px]'>ЛАЙТ</p>
                                <p>Для активных резидентов</p>
                            </div>
                            <button className='bg-lime-600 rounded-[50px] w-[300px] h-[75px] text-[25px]'>Забронировать</button>
                        </div>
                        <div className='w-[100%] flex justify-center mt-10 '>
                            <ul className='text-[20px]'>
                                <li>Комплексная оценка здоровья, наблюдение, профессиональный уход.</li>
                                <li>Обеспечиваем максимальный уровень качества жизни и активности.</li>
                                <li>Осмотр и наблюдение врачом-терапевтом, психологом, психиатром,<br /> неврологом, кардиологом.</li>
                                <li>Помощь в проведении гигиенических процедур, социально-бытовая <br /> адаптация, разнообразный досуг</li>
                            </ul>
                        </div>
                        <div className='h-[250px] flex flex-col mt-10'> 
                            <div className=' '>
                                <div className='flex justify-center gap-[300px]'>
                                    <p className='text-[20px]'>Номер “Комфорт” 3 000 ₽/сутки</p>
                                    <button><img src={img14} alt="" /></button>
                                </div>
                                <div className='  ml-[210px] flex-col'>
                                    <div>
                                        <div className='flex gap-2'>
                                            <img src={img13} alt="" />
                                            <p className='text-[20px]'>Двух/трёхместное размещение</p>
                                        </div>
                                        <div className='flex gap-2'>
                                            <img src={img13} alt="" />
                                            <p className='text-[20px]'>5-ти разовое питание</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=' flex justify-center gap-[280px]'>
                                <div className='flex gap-[70px]'> 
                                    <div><p className='text-[20px]'>Номер “Люкс”</p></div>
                                    <div><p className='text-[20px]'>9 000 ₽/сутки</p></div>
                                </div>
                                <div className='flex justify-end'>
                                    <button><img src={img16} alt="" /></button>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div>
                        <img src={img15} alt=""  />
                    </div>

                </div>
            </div>
            <div className=' text-center'>
                <p className='text-[40px] text-slate-600'>Наши специалисты всегда готовы 
                    <span className='font-[500]'> помочь <br /> и поддержать пожилых людей в любой ситуации</span>
                </p>
                <div className=' flex justify-around'>
                    <div className='mt-[100px]'>
                        <img src={img17} alt="" />
                        <div>
                            <p className='text-[30px] font-[500]'>Ирина Доброва</p>
                            <p className='text-[25px] text-slate-500'>Врач-невролог</p>
                            <p className='text-[25px] text-slate-500'>Стаж более 25 лет</p>
                        </div>
                        <button className='text-green-600 text-[25px]'>Смотреть подробнее</button>
                    </div>
                    <div>
                        <img src={img18} alt="" />
                        <div>
                            <p className='text-[30px] font-[500]'>Мария Тимофеева</p>
                            <p className='text-[25px] text-slate-500'>Врач-геронтолог, терапевт</p>
                            <p className='text-[25px] text-slate-500'>Стаж более 20 лет</p>
                        </div>
                        <button className='text-green-600 text-[25px]'>Смотреть подробнее</button>
                    </div>
                    <div className='mt-[100px]'>
                        <img src={img19} alt="" />
                        <div>
                            <p className='text-[30px] font-[500]'>Сергей Кузнецов</p>
                            <p className='text-[25px] text-slate-500'>Врач-реабилитолог, главный врач</p>
                            <p className='text-[25px] text-slate-500'>Стаж более 30 лет</p>
                        </div>
                        <button className='text-green-600 text-[25px]'>Смотреть подробнее</button>
                    </div>
                </div>
            </div>

        </div>
        
            )

}
export default Body