import React from "react";
import headerstyle from '../header.module.scss'
import logo from '@/assets/img/gin.svg'
import Image from "next/image";
import Link from "next/link";
import styles from './page.module.scss'

const Page = () => {
 return (
  <main className={headerstyle.main}>
   <div className={headerstyle.header}>
    <div className={headerstyle.wrapper}>
     <div className={headerstyle.logo_wrapper}>
      <Image className={headerstyle.logo} src={logo} alt="logo" />
      <p>VPN-GIN</p>
     </div>

     <div>
      <Link className={headerstyle.links} href={"/"}>Главная</Link>
     </div>
    </div>
   </div>

   <div className={styles.wrapper_privacy}>
    <div className={styles.contents}>
          <h1>Политика конфиденциальности персональных данных</h1>
          <p>
            Настоящая Политика конфиденциальности персональных данных (далее – Политика конфиденциальности) действует в отношении всей информации, которую сайт об услугах предоставления доступов к vpn http://vpn-gin.com/, (далее – vpn-gin.com) расположенный на доменном имени vpn-gin.com (а также его субдоменах), может получить о Пользователе во время использования сайта vpn-gin.com (а также его субдоменов), его программ и его продуктов.
          </p>
          <p>
            1. Определение терминов
          </p>
          <p>
            1.1 В настоящей Политике конфиденциальности используются следующие термины:
          </p>
          <p>
            1.1.1. «Администрация сайта» (далее – Администрация) – уполномоченные сотрудники на управление сайтом об услугах предоставления доступов Vpn-gin.com, которые организуют и (или) осуществляют обработку персональных данных, а также определяет цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными.
          </p>
          <p>
            1.1.2. «Персональные данные» - любая информация, относящаяся к прямо или косвенно определенному, или определяемому физическому лицу (субъекту персональных данных).
          </p>
          <p>
            1.1.3. «Обработка персональных данных» - любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.
          </p>
          <p>
            1.1.4. «Конфиденциальность персональных данных» - обязательное для соблюдения Оператором или иным получившим доступ к персональным данным лицом требование не допускать их распространения без согласия субъекта персональных данных или наличия иного законного основания.
          </p>
          <p>1.1.5. «Сайт Портал об услугах предоставления доступов Vpn-gin.com» - это совокупность связанных между собой веб-страниц, размещенных в сети Интернет по уникальному адресу (URL): http://vpn-gin.com/</p>
          <p>1.1.6. «Пользователь сайта Портал об услугах предоставления доступов vpn-gin.com », «пользователь бота в мессенджере Telegram» (далее Пользователь) – лицо, имеющее доступ к сайту Портал  об услугах предоставления доступов Vpn-gin.com, посредством сети Интернет и использующее информацию, материалы и продукты сайта Портал об услугах предоставления доступов Vpn-gin.com, лицо, имеющее доступ к боту в мессенджере Telegram, расположенному по адресу, указанному на сайте Портал  об услугах предоставления доступов Vpn-gin.com .</p>
          <p>1.1.7. «Cookies» — небольшой фрагмент данных, отправленный веб-сервером и хранимый на компьютере пользователя, который веб-клиент или веб-браузер каждый раз пересылает веб-серверу в HTTP-запросе при попытке открыть страницу соответствующего сайта.</p>
          <p>1.1.8. «IP-адрес» — уникальный сетевой адрес узла в компьютерной сети, через который Пользователь получает доступ на Vpn-gin.com.</p>
          <p>1.1.9. «Товар» - продукт, который Пользователь заказывает и оплачивает через платёжные системы. </p>
          <p>2. Общие положения</p>
          <p>2.1. Использование сайта Портал об услугах предоставления доступов vpn-gin.com, а также бота Telegram, указанного на сайте, Пользователем означает согласие с настоящей Политикой конфиденциальности и условиями обработки персональных данных Пользователя.</p>
          <p>2.2. В случае несогласия с условиями Политики конфиденциальности Пользователь должен прекратить использование сайта Портал об услугах предоставления доступов vpn-gin.com.</p>
          <p>2.3. Настоящая Политика конфиденциальности применяется к сайту Портал об услугах предоставления доступов vpn-gin.com не контролирует и не несет ответственность за сайты третьих лиц, на которые Пользователь может перейти по ссылкам, доступным на сайте Портал об услугах предоставления доступов vpn-gin.com, а также расположенным в боте Telegram, указанным на сайте.</p>
          <p>2.4. Администрация не проверяет достоверность персональных данных, предоставляемых Пользователем.</p>
          <p>3. Предмет политики конфиденциальности</p>
          <p>3.1. Настоящая Политика конфиденциальности устанавливает обязательства Администрации по неразглашению и обеспечению режима защиты конфиденциальности персональных данных, которые Пользователь предоставляет по запросу Администрации при регистрации на сайте Портал об услугах предоставления доступов Vpn-gin.com, при подписке на информационную e-mail рассылку или при оформлении заказа.</p>
          <p>3.2. Персональные данные, разрешённые к обработке в рамках настоящей Политики конфиденциальности, предоставляются Пользователем путём получения доступа к боту в мессенджере Telegram, расположенному по адресу, указанному на сайте Портал  об услугах предоставления доступов Vpn-gin.com  и включают в себя следующую информацию:</p>
          <p>3.2.1. user_id мессенджера Telegam;</p>
          <p>3.3. Отключение cookies может повлечь невозможность доступа к частям сайта, требующим авторизации.</p>
          <p>- IP адрес;</p>
          <p>- информация из cookies;</p>
          <p>- информация о браузере;</p>
          <p>- время доступа;</p>
          <p>- реферер (адрес предыдущей страницы).</p>
          <p>3.3.1. Отключение cookies может повлечь невозможность доступа к частям сайта, требующим авторизации.</p>
          <p>3.3.2. vpn-gin.com осуществляет сбор статистики об IP-адресах своих посетителей. Данная информация используется с целью предотвращения, выявления и решения технических проблем.</p>
          <p>3.4. Любая иная персональная информация неоговоренная выше (история посещения, используемые браузеры, операционные системы и т.д.) подлежит надежному хранению и нераспространению, за исключением случаев, предусмотренных в п.п. 5.2. и 5.3. настоящей Политики конфиденциальности.</p>
          <p>4. Цели сбора персональной информации пользователя</p>
          <p>4.1. Персональные данные Пользователя Администрация может использовать в целях:</p>
          <p>4.1.1. Идентификации Пользователя, зарегистрированного на сайте Портал об услугах предоставления доступов vpn-gin.com для его дальнейшей авторизации, оформления заказа и других действий.</p>
          <p>4.1.2. Установления с Пользователем обратной связи, включая направление уведомлений, запросов, касающихся использования сайта Портал об услугах предоставления доступов Vpn-gin.com, оказания услуг и обработки запросов и заявок от Пользователя.</p>
          <p>4.1.3. Предоставления Пользователю эффективной технической поддержки при возникновении проблем, связанных с использованием Vpn-gin.com.</p>
          <p>4.1.4. Предоставления Пользователю специальных предложений, информации о ценах, новостной рассылки и иных сведений от имени Vpn-gin.com.</p>
          <p>4.1.5. Осуществления рекламной деятельности с согласия Пользователя.</p>
          <p>5. Способы и сроки обработки персональной информации</p>
          <p>5.1. Обработка персональных данных Пользователя осуществляется без ограничения срока, любым законным способом, в том числе в информационных системах персональных данных с использованием средств автоматизации или без использования таких средств.</p>
          <p>5.2. При утрате или разглашении персональных данных Администрация вправе не информировать Пользователя об утрате или разглашении персональных данных.</p>
          <p>5.3. Администрация принимает необходимые организационные и технические меры для защиты персональной информации Пользователя от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий третьих лиц.</p>
          <p>5.4. Администрация совместно с Пользователем принимает все необходимые меры по предотвращению убытков или иных отрицательных последствий, вызванных утратой или разглашением персональных данных Пользователя.</p>
          <p>6. Права и обязанности сторон</p>
          <p>6.1. Пользователь вправе:</p>
          <p>6.1.1. Принимать свободное решение о предоставлении своих персональных данных, необходимых для использования сайта Портал о б услугах предоставления доступов Vpn-gin.com, и давать согласие на их обработку.</p>
          <p>6.1.2. Обновить, дополнить предоставленную информацию о персональных данных в случае изменения данной информации.</p>
          <p>6.1.3. Пользователь имеет право на получение у Администрации информации, касающейся обработки его персональных данных, если такое право не ограничено в соответствии с федеральными законами. Пользователь вправе требовать от Администрации уточнения его персональных данных, их блокирования или уничтожения в случае, если персональные данные являются неполными, устаревшими, неточными, незаконно полученными или не являются необходимыми для заявленной цели обработки, а также принимать предусмотренные законом меры по защите своих прав.</p>
          <p>6.2. Администрация обязана:</p>
          <p>6.2.1. Использовать полученную информацию исключительно для целей, указанных в п. 4 настоящей Политики конфиденциальности.</p>
          <p>6.2.2. Обеспечить хранение конфиденциальной информации в тайне, не разглашать без предварительного письменного разрешения Пользователя, а также не осуществлять продажу, обмен, опубликование, либо разглашение иными возможными способами переданных персональных данных Пользователя, за исключением п.п. 5.2 и 5.3. настоящей Политики Конфиденциальности.</p>
          <p>6.2.3. Принимать меры предосторожности для защиты конфиденциальности персональных данных Пользователя согласно порядку, обычно используемого для защиты такого рода информации в существующем деловом обороте.</p>
          <p>6.2.4. Осуществить блокирование персональных данных, относящихся к соответствующему Пользователю, с момента обращения или запроса Пользователя, или его законного представителя либо уполномоченного органа по защите прав субъектов персональных данных на период проверки, в случае выявления недостоверных персональных данных или неправомерных действий.</p>
          <p>7. Ответственность сторон</p>
          <p>7.1. Администрация, не исполнившая свои обязательства, несёт ответственность за убытки, понесённые Пользователем в связи с неправомерным использованием персональных данных, в соответствии с законодательством Российской Федерации, за исключением случаев, предусмотренных п.п. 5.2., 5.3. и 7.2. настоящей Политики Конфиденциальности.</p>
          <p>7.2. В случае утраты или разглашения Конфиденциальной информации Администрация не несёт ответственность, если данная конфиденциальная информация:</p>
          <p>7.2.1. Стала публичным достоянием до её утраты или разглашения.</p>
          <p>7.2.2. Была получена от третьей стороны до момента её получения Администрацией Ресурса.</p>
          <p>7.2.3. Была разглашена с согласия Пользователя.</p>
          <p>7.3. Пользователь несет полную ответственность за соблюдение требований законодательства РФ, в том числе законов о рекламе, о защите авторских и смежных прав, об охране товарных знаков и знаков обслуживания, но не ограничиваясь перечисленным, включая полную ответственность за содержание и форму материалов.</p>
          <p>7.4. Пользователь соглашается, что информация, предоставленная ему как часть Vpn-gin.com, может являться объектом интеллектуальной собственности, права на который защищены и принадлежат другим Пользователям, партнерам или рекламодателям, которые размещают такую информацию на Vpn-gin.com.</p>
          <p>Пользователь не вправе вносить изменения, передавать в аренду, передавать на условиях займа, продавать, распространять или создавать производные работы на основе такого Содержания (полностью или в части), за исключением случаев, когда такие действия были письменно прямо разрешены собственниками такого Содержания в соответствии с условиями отдельного соглашения.</p>
          <p>7.5. В отношение текстовых материалов (статей, публикаций, находящихся в свободном публичном доступе на сайте Портал об услугах предоставления доступов Vpn-gin.com) допускается их распространение при условии, что будет дана ссылка на Vpn-gin.com.</p>
          <p>7.6. Администрация не несет ответственности перед Пользователем за любой убыток или ущерб, понесенный Пользователем в результате удаления, сбоя или невозможности сохранения какого-либо Содержания и иных коммуникационных данных, содержащихся на сайте Портал об услугах предоставления доступов vpn-gin.com или передаваемых через него.</p>
          <p>7.7. Администрация не несет ответственности за любые прямые или косвенные убытки, произошедшие из-за: использования либо невозможности использования сайта, либо отдельных сервисов; несанкционированного доступа к коммуникациям Пользователя; заявления или поведение любого третьего лица на сайте.</p>
          <p>7.8. Администрация не несет ответственность за какую-либо информацию, размещенную пользователем на сайте Портал об услугах предоставления доступов Vpn-gin.com, включая, но не ограничиваясь: информацию, защищенную авторским правом, без прямого согласия владельца авторского права.</p>
          <p>8. Разрешение споров</p>
          <p>8.1. До обращения в суд с иском по спорам, возникающим из отношений между Пользователем и Администрацией, обязательным является предъявление претензии (письменного предложения или предложения в электронном виде о добровольном урегулировании спора).</p>
          <p>8.2. Получатель претензии в течение 30 календарных дней со дня получения претензии, письменно или в электронном виде уведомляет заявителя претензии о результатах рассмотрения претензии.</p>
          <p>8.3. При не достижении соглашения спор будет передан на рассмотрение Арбитражного суда г. Москва.</p>
          <p>8.4. К настоящей Политике конфиденциальности и отношениям между Пользователем и Администрацией применяется действующее законодательство Российской Федерации.</p>
          <p>9. Дополнительные условия</p>
          <p>9.1. Администрация вправе вносить изменения в настоящую Политику конфиденциальности без согласия Пользователя.</p>
          <p>9.2. Новая Политика конфиденциальности вступает в силу с момента ее размещения на сайте Портал об услугах предоставления доступов vpn-gin.com, если иное не предусмотрено новой редакцией Политики конфиденциальности.</p>
          <p>9.3. Все предложения или вопросы касательно настоящей Политики конфиденциальности следует сообщать по адресу: support@vpn-gin.com</p>
          <p>9.4. Действующая Политика конфиденциальности размещена на странице по адресу http://vpn-gin.com/terms-of-use/</p>
    </div>
   </div>
  </main>
 )
}

export default Page;
