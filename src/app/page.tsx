"use client"

import Image from "next/image";
import styles from "./page.module.scss";
import { Button, Col, Collapse, Row, Steps, theme } from "antd";
import type { CollapseProps } from 'antd';

import earth from '@/assets/img/_Earth from space -- Video clip--.gif'
import headerstyle from './header.module.scss'
import commercial from '@/assets/img/ad-advertisement-advertising-svgrepo-com.svg'
import unlimited from '@/assets/img/unlimited-svgrepo-com.svg'
import history from '@/assets/img/book-bundle-layout-svgrepo-com.svg'
import click from '@/assets/img/click-svgrepo-com.svg'
import telegram from '@/assets/img/telegram-svgrepo-com.svg'
import logo from '@/assets/img/gin.svg'
import Link from "next/link";
import Lottie from 'react-lottie';
import scroll from '@/assets/img/Animation - 1721123041305.gif'
import { CSSProperties, useEffect } from "react";
import { CaretRightOutlined } from "@ant-design/icons";
//@ts-ignore
import Fade from 'react-reveal/Fade'


export default function Home() {

  var adv: any
  var connection: any
  var tariffs: any
  useEffect(() => {
    if (typeof window !== 'undefined') {
      adv = document.getElementById("adv");
      connection = document.getElementById("connection");
      tariffs = document.getElementById("tariffs");
      // Your code that interacts with these elements
    }
  }, []);

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  const { token } = theme.useToken();

  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    background: "none",
    borderRadius: token.borderRadiusLG,
    border: 'none',
  };


  const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
    {
      key: '1',
      label: <p className={styles.collapse_header}>Какое количество активных VPN соединений можно использовать? </p>,
      children: <p className={styles.collapse_header}>Мы не ограничиваем количество подключений,
        однако все подключения в сумме имеют общий
        лимит скорости, указанный в тарифном плане.
      </p>,
      style: panelStyle,
    },
    {
      key: '2',
      label: <p className={styles.collapse_header}>Можно ли использовать ваши услуги VPN на домашнем роутере?</p>,
      children: <p className={styles.collapse_header}>Да. Вы можете настроить VPN-подключение, если роутер его поддерживает. Большинство современных маршрутизаторов поддерживает работу по протоколам подключения, которые мы предоставляем при заказе услуги VPN.
        <br />
        В инструкции вашего роутера должна быть указана процедура подключения.</p>,
      style: panelStyle,
    },
    {
      key: '3',
      label: <p className={styles.collapse_header}>Можно ли получить тестовый доступ к услуге VPN?</p>,
      children: <p className={styles.collapse_header}>Да. Мы предоставляем бесплатный тестовый период услуги VPN на 5 дней. <br />
        Подайте заявку на тестовый период согласно инструкции. <br />
        Оплата тестового периода осуществляется только при продлении услуги. Если услуга Вам не подходит – тестовый период не оплачивается. <br />
        Минимальный срок аренды услуги - 1 месяц. <br />
      </p>,
      style: panelStyle,
    },
    {
      key: '4',
      label: <p className={styles.collapse_header}>Каковы основные преимущества вашего VPN сервиса?</p>,
      children: <p className={styles.collapse_header}>Мы гарантируем безопасное и анонимное соединение, обход блокировок контента, защиту от киберугроз и высокую скорость соединения. <br />
      </p>,
      style: panelStyle,
    },
    {
      key: '5',
      label: <p className={styles.collapse_header}>В каких странах доступны ваши серверы?</p>,
      children: <p className={styles.collapse_header}>Наш VPN предлагает сервера в 50+ странах по всему миру, обеспечивая свободный доступ к международным ресурсам.<br />
      </p>,
      style: panelStyle,
    },
    {
      key: '6',
      label: <p className={styles.collapse_header}>Как вы обеспечиваете безопасность данных?</p>,
      children: <p className={styles.collapse_header}>Мы используем передовые методы шифрования данных, строгую политику нерегистрации логов и механизмы защиты от утечек DNS.<br />
      </p>,
      style: panelStyle,
    },
    {
      key: '7',
      label: <p className={styles.collapse_header}>Есть ли ограничения по скорости или объему передаваемых данных?</p>,
      children: <p className={styles.collapse_header}>Наш VPN обеспечивает высокую скорость соединения и не накладывает ограничений на объем передаваемых данных.<br />
      </p>,
      style: panelStyle,
    },
  ];


  return (
    <main className={headerstyle.main}>
      <div className={headerstyle.header}>
        <div className={headerstyle.wrapper}>
          <div className={headerstyle.logo_wrapper}>
            <Image className={headerstyle.logo} src={logo} alt="logo" />
            <p>VPN-GIN</p>
          </div>

          <div className={styles.header_mobile}>
            <Button className={headerstyle.links} href={"/"}>Главная</Button>
            <Button className={headerstyle.links} onClick={() => adv.scrollIntoView({ behavior: "smooth" })}>С чего начать</Button>
            <Button className={headerstyle.links} onClick={() => tariffs.scrollIntoView({ behavior: "smooth" })}>Тарифы</Button>
          </div>
        </div>
      </div>
      <Row justify={'center'}>
        <Col lg={20} xs={23}>
          <Fade>


            <div className={styles.hello_wrapper}>
              <div className={styles.wrapper}>
                <Image className={styles.wrapper_video} src={earth} alt="earth" />
                <div className={styles.header_wrapper}>
                  <h1>VPN под любое устройство</h1>
                  <h1>
                    который открывает сайты 190
                    стран без тормозов и багов
                  </h1>
                  <h2>
                    5 дней тест-драйва за наш счет
                  </h2>
                  <Button className={styles.next} target="_blank" href="https://t.me/vpn_gin_bot?start=trial">Попробовать бесплатно</Button>
                </div>
              </div>
              <Image className={styles.scroll_anim} src={scroll} alt="scroll" />
            </div>
          </Fade>
          <Fade>


            <div id="adv" className={styles.adv}>
              <div className={styles.adv_container}>
                <h1>Преимущества</h1>
                <h2>VPN-GIN — это возможность безопасно просматривать веб-страницы, транслировать медиа, играть и работать, не нарушая свою приватность в Интернете независимо от обстоятельств
                </h2>

                <div className={styles.adv_items}>
                  <div className={styles.adv_item}>
                    <div className={styles.adv_header}>
                      <Image src={commercial} alt="commercial" />
                      <h2>Нет рекламы</h2>
                    </div>
                    <p>Получите доступ к любому видео-сервису, социальной сети, интернет-магазину и многому другому без назойливой рекламы.

                    </p>
                  </div>
                  <div className={styles.adv_item}>
                    <div className={styles.adv_header}>

                      <Image src={unlimited} alt="unlimited" />
                      <h2>Нет ограничений</h2>
                    </div>
                    <p>
                      У нас нет ограничений на скорость, время подключения и смену регионов для пользователей.


                    </p>
                  </div >
                  <div className={styles.adv_item}>
                    <div className={styles.adv_header}>

                      <Image src={history} alt="journal" />
                      <h2>Журнал действий</h2>
                    </div>
                    <p>VPN-gin не видит и не регистрирует информацию о сайтах, которые вы посещаете.</p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade>


            <div id="connection" className={styles.connection}>
              <div className={styles.connection_wrapper}>

                <h1>Быстрое подключение</h1>
                <div className={styles.connection_steps}>

                  <div className={styles.connection_step}>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                      <p className={styles.step}>1.</p>
                    <Image className={styles.connection_images} src={click} alt="click" />
                    </div>
                    <Button target="_blank" href="https://t.me/vpn_gin_bot?start=trial" className={styles.connection_step_button}>Попробовать бесплатно</Button>
                  </div>
                  <div className={styles.connection_step}>
                  <div style={{display: 'flex', flexDirection: 'row'}}>
                  <p className={styles.step}>2.</p>
                    <Image className={styles.connection_images} src={telegram} alt="telegram" />
                    </div>
                    <p className={styles.connection_step_text}>Перейдите в Telegram</p>
                  </div>
                  <div className={styles.connection_step}>
                  <div style={{display: 'flex', flexDirection: 'row'}}>
                  <p className={styles.step}>3.</p>
                    <Image className={styles.connection_images} src={logo} alt="logo" />
                  </div>
                    <p className={styles.connection_step_text}>Запустите бот</p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade>

            <div id="tariffs" className={styles.tariffs}>
              <div className={styles.tariffs_wrapper}>
                <h1>Тарифы</h1>
                <div className={styles.tarrifs_items}>
                  <div className={styles.tarrifs_item}>
                    <h2>5 дней</h2>
                    <h2>0₽</h2>
                    <Button style={{padding: 7}} target="_blank" href="https://t.me/vpn_gin_bot?start=trial">Получить</Button>
                  </div>
                  <div className={styles.tarrifs_item}>
                    <h2>До 10Мб/с</h2>
                    <h2>135 ₽/мес.</h2>
                    <Button style={{padding: 7}} target="_blank" href="https://t.me/vpn_gin_bot?start=ruZTFo_DsH">Получить</Button>
                  </div>
                  <div className={styles.tarrifs_item}>
                    <h2>Для YouTube</h2>
                    <h2>350 ₽/мес.</h2>
                    <Button style={{padding: 7}} target="_blank" href="https://t.me/vpn_gin_bot?start=ruZTFo_DsH">Получить</Button>
                  </div>
                  <div className={styles.tarrifs_item}>
                    <h2>РФ 🇷🇺</h2>
                    <h2>135 ₽/мес.</h2>
                    <Button style={{padding: 7}} target="_blank" href="https://t.me/vpn_gin_bot?start=ruZTFo_DsH">Получить</Button>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade>

            <div className={styles.faq}>
              <Collapse
                className={styles.collapse}
                bordered={false}
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                style={{ background: token.colorBgContainer }}
                items={getItems(panelStyle)}
              />

            </div>

          </Fade>
        </Col>
      </Row>
    </main>
  );
}
