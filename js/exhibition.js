window.onload = function () {
  const windowTop = $(window).scrollTop(); 
  //$(".list-bullet ul li").removeClass("hollow");
  //$(".map section").removeClass("read"); 
  $("body, html").animate({ scrollTop: windowTop }, 1000); //頁面跳回頂部

  //線上探索分類


  const renova = [//高鐵創生
    {
      number: "01",
      img: [
        {
          l: "./img/renova/01/0101_1x.jpg",
          m: "./img/renova/01/0101_2x.jpg",
          h: "./img/renova/01/0101_3x.jpg"
        },
        {
          l: "./img/renova/01/0102_1x.jpg",
          m: "./img/renova/01/0102_2x.jpg",
          h: "./img/renova/01/0102_3x.jpg"
        },
        {
          l: "./img/renova/01/0103_1x.jpg",
          m: "./img/renova/01/0103_2x.jpg",
          h: "./img/renova/01/0103_3x.jpg"
        }
      ],
      map: "./img/renova/01/mapA_01.svg",
      venue: "A",
      title: "輪轉世紀 — 軌跡百年",
      desciption:
        "最早的「鐵支路」並非真正的「鐵」支路，而是「木」支路。約西元 1600 年左右，英國為了將礦區的煤礦與鐵礦方便運送到附近的港口，因而發展出利用馬匹拉著簡單的車輛運送。台灣高鐵探索館特別於入館處打造充滿科技性與互動性的藍晒圖展示牆，各種鐵道歷史的車輛圖像等你來挖掘。"
    },
    {
      number: "02",
      img: [
        {
          l: "./img/renova/02/0201_1x.jpg",
          m: "./img/renova/02/0201_2x.jpg",
          h: "./img/renova/02/0201_3x.jpg"
        },
        {
          l: "./img/renova/02/0202_1x.jpg",
          m: "./img/renova/02/0202_2x.jpg",
          h: "./img/renova/02/0202_3x.jpg"
        }
      ],
      map: "./img/renova/02/mapA_02.svg",
      venue: "A",
      title: "從台灣鐵道BOT史說起",
      desciption:
        "從台灣巡撫劉銘傳以向民間籌募經費興建及營運，為現代鐵道 BOT 的雛形，開啟台灣的鐵道歷史；到日據時期 1908 年完成鐵路縱貫線，再到 1979 年西部縱貫鐵路電氣化，2007 年高鐵通車的台灣鐵道空間革命，台灣鐵道的歷史脈絡，可以在此一探究竟。"
    },
    {
      number: "03",
      img: [
        {
          l: "./img/renova/03/0301_1x.jpg",
          m: "./img/renova/03/0301_2x.jpg",
          h: "./img/renova/03/0301_3x.jpg"
        }
      ],
      map: "./img/renova/03/mapA_03.svg",
      venue: "A",
      title: "台灣高鐵的創生 (1996~2000)",
      desciption:
        "台灣高鐵公司於 1998 年 5 月正式成立，在政府大力支持與國內民間企業團結齊心下，建設台灣跨世紀的鐵道工程，以完成一日生活圈加快台灣南北交通的速度為初衷，推動台灣的第三次鐵道空間大革命。"
    },
    {
      number: "04",
      img: [
        {
          l: "./img/renova/04/0401_1x.jpg",
          m: "./img/renova/04/0401_2x.jpg",
          h: "./img/renova/04/0401_3x.jpg"
        },
        {
          l: "./img/renova/04/0402_1x.jpg",
          m: "./img/renova/04/0402_2x.jpg",
          h: "./img/renova/04/0402_3x.jpg"
        }
      ],
      map: "./img/renova/04/mapA_04.svg",
      venue: "A",
      title: "高鐵工程之最 (2000~2006)",
      desciption:
        "從挖掘隧道的新奧工法、橋樑工程中第一次引進台灣的全跨預鑄吊裝工法等，另有互動式的隧道施工安全服裝拍攝體驗機，藉由完善且兼富趣味的歷史記錄，一窺高鐵工程的全貌，亦顯示高鐵公司用最高的品質標準，打造出台灣的百年建設。"
    },
    {
      number: "05",
      img: [
        {
          l: "./img/renova/05/0501_1x.jpg",
          m: "./img/renova/05/0501_2x.jpg",
          h: "./img/renova/05/0501_3x.jpg"
        }
      ],
      map: "./img/renova/05/mapA_05.svg",
      venue: "A",
      title: "台灣永續生態的守護",
      desciption:
        "台灣高鐵公司採取最先進、對生態影響最微小的興建技術，對高鐵沿線上各種生態與人文環境的保護，抱以最深切的責任，例如對台南官田的水雉、林口流疏樹、新竹 300 年的老樟樹進行培育與保護工作，期許高鐵的科技與台灣的人文生態共榮共存。"
    },
    {
      number: "06",
      img: [
        {
          l: "./img/renova/06/0601_1x.jpg",
          m: "./img/renova/06/0601_2x.jpg",
          h: "./img/renova/06/0601_3x.jpg"
        },
        {
          l: "./img/renova/06/0602_1x.jpg",
          m: "./img/renova/06/0602_2x.jpg",
          h: "./img/renova/06/0602_3x.jpg"
        }
      ],
      map: "./img/renova/06/mapA_06.svg",
      venue: "A",
      title: "探索鐵道工程",
      desciption:
        "高鐵承攬商於軌道施工期間，打造專用的巡軌腳踏車，擔任「守衛高鐵」的重責大任，以防堵宵小覬覦高鐵電線或電纜，亦是高鐵工程師進行路線巡視的最佳交通工具。巡軌腳踏車最大的特色，就是輪寬距與鐵軌等寬，宛如蜘蛛腳般的四個輪子，其為白鐵材質還附有遮雨棚與車籃，使用時要先把腳踏車搬至軌道上就定位。"
    },
    {
      number: "07",
      img: [
        {
          l: "./img/renova/07/0701_1x.jpg",
          m: "./img/renova/07/0701_2x.jpg",
          h: "./img/renova/07/0701_3x.jpg"
        }
      ],
      map: "./img/renova/07/mapA_07.svg",
      venue: "A",
      title: "鋪天蓋地 — 軌道路床形式",
      desciption:
        "台灣高鐵為了路線本身與周邊環境的需求，在沿線運用了各種軌道工程技術來鋪設鐵路；包括，基地與左營車站所使用的道碴軌；配合轉轍器設計佈設在各車站內的德國式道床；用在台北與新北市區地下段，防止振動影響附近住戶的LVT低振動道床；以及，全線主要使用達80.9%的日本版式軌道J-SLAB。"
    },
    {
      number: "08",
      img: [
        {
          l: "./img/renova/08/0801_1x.jpg",
          m: "./img/renova/08/0801_2x.jpg",
          h: "./img/renova/08/0801_3x.jpg"
        },
        {
          l: "./img/renova/08/0802_1x.jpg",
          m: "./img/renova/08/0802_2x.jpg",
          h: "./img/renova/08/0802_3x.jpg"
        }
      ],
      map: "./img/renova/08/mapA_08.svg",
      venue: "A",
      title: "安全告示牌 — 守護工安的共通語言",
      desciption:
        "台灣高鐵公司採取最先進、對生態影響最微小的興建技術，對高鐵沿線上各種生態與人文環境的保護，抱以最深切的責任，例如對台南官田的水雉、林口流疏樹、新竹 300 年的老樟樹進行培育與保護工作，期許高鐵的科技與台灣的人文生態共榮共存。"
    },
    {
      number: "09",
      img: [
        {
          l: "./img/renova/09/0901_1x.jpg",
          m: "./img/renova/09/0901_2x.jpg",
          h: "./img/renova/09/0901_3x.jpg"
        },
        {
          l: "./img/renova/09/0902_1x.jpg",
          m: "./img/renova/09/0902_2x.jpg",
          h: "./img/renova/09/0902_3x.jpg"
        }
      ],
      map: "./img/renova/09/mapA_09.svg",
      venue: "A",
      title: "向高鐵幕後英雄致敬",
      desciption:
        "台灣高鐵在興建的階段，共有 26 個國家的專業人士前來協助，他們離鄉背井到台灣打拼，與家人的分離加上生活在異地，高鐵公司也處處給予這些外籍人士多方面的關懷與設想。"
    }
  ];
  const era = [//高速時代
    {
      number: "10",
      img: [
        {
          l: "./img/era/10/1001_1x.jpg",
          m: "./img/era/10/1001_2x.jpg",
          h: "./img/era/10/1001_3x.jpg"
        },
        {
          l: "./img/era/10/1002_1x.jpg",
          m: "./img/era/10/1002_2x.jpg",
          h: "./img/era/10/1002_3x.jpg"
        }

      ],
      map: "./img/era/10/mapA_10.svg",
      venue: "A",
      title: "700T 的誕生",
      desciption:
        "700T 列車係綜合日本新幹線 700 系的車體與 500 系的機電系統，專為台灣環境的需求所設計製造的列車，形式編號以台灣英文 Taiwan 的第一個字母 T，作為 700T 車型的代號。"
    },
    {
      number: "11",
      img: [
        {
          l: "./img/era/11/1101_1x.jpg",
          m: "./img/era/11/1101_2x.jpg",
          h: "./img/era/11/1101_3x.jpg"
        },
        {
          l: "./img/era/11/1102_1x.jpg",
          m: "./img/era/11/1102_2x.jpg",
          h: "./img/era/11/1102_3x.jpg"
        },
        {
          l: "./img/era/11/1102_1x.jpg",
          m: "./img/era/11/1102_2x.jpg",
          h: "./img/era/11/1102_3x.jpg"
        }

      ],
      map: "./img/era/11/mapA_11.svg",
      venue: "A",
      title: "一日生活圈",
      desciption:
        "藉由定時發車的 700T 動態列車行經台灣由南到北的各個人文藝術、歷史建築等名勝景點的微縮景觀展示台，勾勒出台灣西部走廊一日生活圈的願景，帶您跟著高鐵探索台灣之美。"
    },
    {
      number: "12",
      img: [
        {
          l: "./img/era/12/1201_1x.jpg",
          m: "./img/era/12/1201_2x.jpg",
          h: "./img/era/12/1201_3x.jpg"
        },
        {
          l: "./img/era/12/1202_1x.jpg",
          m: "./img/era/12/1202_2x.jpg",
          h: "./img/era/12/1202_3x.jpg"
        },
        {
          l: "./img/era/12/1203_1x.jpg",
          m: "./img/era/12/1203_2x.jpg",
          h: "./img/era/12/1203_3x.jpg"
        }
      ],
      map: "./img/era/12/mapA_12.svg",
      venue: "A",
      title: "700T 上的伸展台",
      desciption:
        "制服，代表著企業形象的識別符號。對高鐵來說，制服不僅是塑造整體形象的重要表徵，當高鐵員工穿著制服與旅客接觸時，更能在第一時間準確傳達「質感、進步、真實、熱情」的品牌精神。"
    },
    {
      number: "13",
      img: [
        {
          l: "./img/era/13/1301_1x.jpg",
          m: "./img/era/13/1301_2x.jpg",
          h: "./img/era/13/1301_3x.jpg"
        },
        {
          l: "./img/era/13/1302_1x.jpg",
          m: "./img/era/13/1302_2x.jpg",
          h: "./img/era/13/1302_3x.jpg"
        },

      ],
      map: "./img/era/13/mapA_13.svg",
      venue: "A",
      title: "700T 駕駛艙",
      desciption:
        "擬真打造 1:1 的 700T 駕駛艙，讓參觀者身歷高鐵駕駛的工作環境視野，並感受儀表板上精密儀器及按鈕所傳達的高速精準運行，以及每趟旅程背後所需具備的高規格運轉控管。"
    },
    {
      number: "14",
      img: [
        {
          l: "./img/era/14/1401_1x.jpg",
          m: "./img/era/14/1401_2x.jpg",
          h: "./img/era/14/1401_3x.jpg"
        }
      ],
      map: "./img/era/14/mapA_14.svg",
      venue: "A",
      title: "高鐵聲光電",
      desciption:
        "台灣高鐵的天然災害告警系統是透過智慧化安全應變與管理的一個系統，以高鐵行控中心為管理中樞，於沿線密集佈設各項偵測設備，隨時偵測地震、強風、豪雨、邊坡滑動、坍方、落石及洪水等狀況，並透過列車自動控制系統即時傳送警訊至列車及行控中心，使列車駕駛及組員能迅速進行各項反應措施，確保行車安全。"
    },
    {
      number: "15",
      img: [
        {
          l: "./img/era/15/1501_1x.jpg",
          m: "./img/era/15/1501_2x.jpg",
          h: "./img/era/15/1501_3x.jpg"
        },
        {
          l: "./img/era/15/1502_1x.jpg",
          m: "./img/era/15/1502_2x.jpg",
          h: "./img/era/15/1502_3x.jpg"
        }
      ],
      map: "./img/era/15/mapA_15.svg",
      venue: "A",
      title: "智慧化旅客服務",
      desciption:
        "台灣高鐵為台灣高速時代的先驅者，也是鐵道資訊科技的領航者，首創即時列車座位資訊，優化查驗票流程，亦為國際首創結合驗票與旅客服務之 APP，並取得國內發明專利。T Express 更結合乘車購票、產品查詢及最新營運訊息的功能，強化旅客溝通及提高便利性。"
    }
  ];
  const repair = [//維修解密
    {
      number: "16",
      img: [
        {
          l: "./img/repair/16/1601_1x.jpg",
          m: "./img/repair/16/1601_2x.jpg",
          h: "./img/repair/16/1601_3x.jpg"
        },
        {
          l: "./img/repair/16/1602_1x.jpg",
          m: "./img/repair/16/1602_2x.jpg",
          h: "./img/repair/16/1602_3x.jpg"
        },

      ],
      map: "./img/repair/16/mapB_16.svg",
      venue: "B",
      title: "轉向架清洗機",
      desciption:
        "轉向架為鐵道車輛最重要的部件之一，它直接乘載車體自重和載重，引導車輛沿鐵路軌道運行，保證車輛順利通過曲線，並減緩來自車輛運行時帶來震動及衝擊作用。每組 700T 列車有 24 組轉向架，當列車行駛時間達一年半，或里程數達 60 萬公里時，即需要卸載進行車削、預檢、清洗、拆檢、持粉探傷等週期性保養作業。"
    },
    {
      number: "17",
      img: [
        {
          l: "./img/repair/17/1701_1x.jpg",
          m: "./img/repair/17/1701_2x.jpg",
          h: "./img/repair/17/1701_3x.jpg"
        },

      ],
      map: "./img/repair/17/mapB_17.svg",
      venue: "B",
      title: "安全是回家唯一的路",
      desciption:
        "安全是台灣高鐵的基石 — 沒有安全就沒有台灣高鐵。高鐵列車在結束一整天的任務後，每個晚上會回到「維修基地」進行維修工作與休息，並依行駛的時間及里程進行各種階段的保養和維修，確保每位旅客乘坐高鐵的安全。"
    },
    {
      number: "18",
      img: [
        {
          l: "./img/repair/18/1801_1x.jpg",
          m: "./img/repair/18/1801_2x.jpg",
          h: "./img/repair/18/1801_3x.jpg"
        }
      ],
      map: "./img/repair/18/mapB_18.svg",
      venue: "B",
      title: "高鐵星光英雄",
      desciption:
        "高鐵午夜停止營運後即進入線上維修時間帶，各種維修人員需在清晨營運準備作業前的短暫時間內完成鐵軌檢查與磨軌、電車線檢查與更換、沿線機房檢查與保養等作業，全年深夜在各地高鐵軌道上四處奔走，他們是旅客看不見的一群人，卻是旅客安全、快速、舒適乘車背後關鍵的無名英雄。"
    },
    {
      number: "19",
      img: [
        {
          l: "./img/repair/19/1901_1x.jpg",
          m: "./img/repair/19/1901_2x.jpg",
          h: "./img/repair/19/1901_3x.jpg"
        }
      ],
      map: "./img/repair/19/mapB_19.svg",
      venue: "B",
      title: "解讀 700T 維修",
      desciption:
        "高鐵 700T 列車在駛滿 120 萬公里或達 36 個月後，必須進行「車輛全檢 (GI) 」，將車體的所有部件包含：車鼻罩、煞車碟片與來令片、車廂間緩衝桿及鼠籠式非同步三相交流馬達等，一一拆卸下來檢修。"
    },
    {
      number: "20",
      img: [
        {
          l: "./img/repair/20/2001_1x.jpg",
          m: "./img/repair/20/2001_2x.jpg",
          h: "./img/repair/20/2001_3x.jpg"
        }
      ],
      map: "./img/repair/20/mapB_20.svg",
      venue: "B",
      title: "高鐵列車維修及清洗作業",
      desciption:
        "高鐵 700T 列車藉由定期的檢修及清洗計畫，來完成車體的維護作業，確保乘車的安全與品質。列車維修作業是分別在固定的時程內，以不同程度及方向的檢修工作來維護列車的轉向架、集電弓與供電系統等設備。而列車在行駛過程中，遭受到的各種空汙、酸雨等外在環境的考驗，也會藉由定期的清洗計畫，讓高鐵列車煥然一新。"
    }
  ];
  const glory = [//榮耀願景
    {
      number: "21",
      img: [
        {
          l: "./img/glory/21/2101_1x.jpg",
          m: "./img/glory/21/2101_2x.jpg",
          h: "./img/glory/21/2101_3x.jpg"
        },
        {
          l: "./img/glory/21/2102_1x.jpg",
          m: "./img/glory/21/2102_2x.jpg",
          h: "./img/glory/21/2102_3x.jpg"
        },
        {
          l: "./img/glory/21/2103_1x.jpg",
          m: "./img/glory/21/2103_2x.jpg",
          h: "./img/glory/21/2103_3x.jpg"
        },
        {
          l: "./img/glory/21/2104_1x.jpg",
          m: "./img/glory/21/2104_2x.jpg",
          h: "./img/glory/21/2104_3x.jpg"
        }
      ],
      map: "./img/glory/21/mapB_21.svg",
      venue: "B",
      title: "大火車微觀園",
      desciption:
        "鐵道車輛模型為交通歷史及科技教育最直接又有效的媒介，大火車微觀園裡介紹鐵道發明一百多年來，蒸汽機車、柴油動力車輛、電力車輛及高鐵車輛等重要模型。"
    },
    {
      number: "22",
      img: [
        {
          l: "./img/glory/22/2201_1x.jpg",
          m: "./img/glory/22/2201_2x.jpg",
          h: "./img/glory/22/2201_3x.jpg"
        }
      ],
      map: "./img/glory/22/mapB_22.svg",
      venue: "B",
      title: "世界高鐵",
      desciption:
        "世界第一條高速鐵路，為 1964 年 10 月 1 日通車的日本東海道新幹線，並開行 0 系新幹線列車，時速最高 210 公里/小時。此後，法國、義大利、德國等，陸續興建出時速 200 公里/小時以上的高速鐵路系統。台灣也在 2007 年完成通車，正式加入世界高鐵的大家庭。"
    },
    {
      number: "23",
      img: [
        {
          l: "./img/glory/23/2301_1x.jpg",
          m: "./img/glory/23/2301_2x.jpg",
          h: "./img/glory/23/2301_3x.jpg"
        },
        {
          l: "./img/glory/23/2302_1x.jpg",
          m: "./img/glory/23/2302_2x.jpg",
          h: "./img/glory/23/2302_3x.jpg"
        }
      ],
      map: "./img/glory/23/mapB_23.svg",
      venue: "A",
      title: "高速傳愛與榮耀",
      desciption:
        "台灣高鐵公司基於「企業社會責任」，積極參與各項社會愛心與救援活動。自 2010 年起推動「高速傳愛 助學計畫」，與「伊甸基金會」、「兒福聯盟」、「為台灣而教」、「快樂學習協會」及「唐氏症基金會」等公益團體合作，在廣大旅客的愛心支持下，11 年來累計募得超過 1.38 億元，超過 2 萬 5 千多位清寒學子獲得幫助。此外，台灣高鐵自通車以來，亦獲得許多國內外獎項的肯定，例如：傑出土木工程獎、天下雜誌服務業金牌獎、國家產業創新獎等肯定。"
    },
    {
      number: "24",
      img: [
        {
          l: "./img/glory/24/2401_1x.jpg",
          m: "./img/glory/24/2401_2x.jpg",
          h: "./img/glory/24/2401_3x.jpg"
        },
        {
          l: "./img/glory/24/2402_1x.jpg",
          m: "./img/glory/24/2402_2x.jpg",
          h: "./img/glory/24/2402_3x.jpg"
        }
      ],
      map: "./img/glory/24/mapB_24.svg",
      venue: "B",
      title: "速度與文化的連結",
      desciption:
        "台灣高鐵每日以時速 300 公里奔馳在西部，路途的搭乘時光，讓旅客有更多時間去發現這片土地的美好，秉持以「引領進步、創造美好的生活平台」為理念，帶出高鐵不僅是便捷的交通工具，更是文化創意推動的平台！從車上刊物「 T-life 雜誌」，提供旅客愉悅的旅讀時光，以及各式的高鐵紀念商品，充分展現高鐵對於速度與文化的連結，創造專屬台灣土地的人情味。"
    },
    {
      number: "25",
      img: [
        {
          l: "./img/glory/25/2501_1x.jpg",
          m: "./img/glory/25/2501_2x.jpg",
          h: "./img/glory/25/2501_3x.jpg"
        },
        {
          l: "./img/glory/25/2502_1x.jpg",
          m: "./img/glory/25/2502_2x.jpg",
          h: "./img/glory/25/2502_3x.jpg"
        },
        {
          l: "./img/glory/25/2503_1x.jpg",
          m: "./img/glory/25/2503_2x.jpg",
          h: "./img/glory/25/2503_3x.jpg"
        }
      ],
      map: "./img/glory/25/mapB_25.svg",
      venue: "B",
      title: "願景 ‧ 未來",
      desciption:
        "台灣高鐵不僅是美好生活的連結者，更是現在生活文化創意的推動者，以融會運輸 (Transportaion)、科技 (Technology)、在地 (Taiwan)、關懷 (Touch)的 4T 精神，加強跨業合作，提供更多元化的選擇，使旅客享有最真誠細膩的關懷服務。"
    }
  ];
  const areaAll = [renova, era, repair, glory];

  const rightBox = (indexArea) => {//右邊展區內容

    let html = "";
    areaAll[indexArea].forEach((value, index) => {
      let carouselContainer = "";
      let carouselLi = "";
      value.img.forEach((photo, photoIndex) => {
        carouselContainer += `<div class="carousel-item ${photoIndex === 0 ? "active" : ""
          }">
              <img data-src="${photo.l}" data-srcset="${photo.l} 1x, ${photo.m} 2x, ${photo.h
          } 3x" class="lazyload d-block w-100" alt="${value.title}">
            </div>`;
        carouselLi += `<li data-target="#carouselExampleIndicators${indexArea}${index}" data-slide-to="${photoIndex}" class="${photoIndex === 0 ? "active" : ""
          }"></li>`;
      });

      html += `<section class="list-sec${index + 1}">

          <figure class="row d-flex figure mx-auto pt-md-5 pt-xl-6 pb-md-5 container-xxl p-4 px-xxl-0">

<div id="carouselExampleIndicators${indexArea}${index}" class="col-xxl-7 col-md-10 col-lg-8 carousel slide carousel-fade px-0 ml-lg-12 ml-xxl-0" data-ride="carousel" >
  <ol class="carousel-indicators">
  ${carouselLi}

  </ol>
  <div class="carousel-inner">
    ${carouselContainer}
  </div>
  <a class="carousel-control-prev d-sm-none" href="#carouselExampleIndicators${indexArea}${index}" role="button" data-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next d-sm-none" href="#carouselExampleIndicators${indexArea}${index}" role="button" data-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</a>
</div>



<figcaption class="col-xxl-5 figure-caption text-left info-box z-nav mt-xxl-0 px-0 ml-md-auto ml-xxl-0 mr-md-4 mr-xxl-0 pt-md-3 pt-lg-5 pt-xxl-0">
                  <div class="mx-xl-3 display-1 text-right d-none d-md-block text-toupe-30 d-xxl-none d-none d-md-block">${value.number
        }</div>
                  <div class="text-left bg-white shadow p-4 mx-xl-3 mx-xxl-0 h-xxl-100 pt-xxl-5 pt-xxl-55">
                      <div class="mb-xxl-4 display-1 text-left text-toupe-30 d-none d-xxl-block">${value.number
        }</div>
                      <div class="h5 text-left text-warm-grey d-md-none">展區${value.number
        } | ${value.venue}館</div>
                      <h2>${value.title}</h2>
                      <p class="card-text text-justify">${value.desciption}
                      </p>
                  </div>
              </figcaption>
          </figure>
          
          
  
      </section>


         `;
    });
    document.querySelector(`.area-${1 + indexArea} .list-sec`).innerHTML = html;
    $(`.list-sec section:odd div`).addClass("order-xxl-2");
  };
  const leftBox = (indexArea) => {//左邊展區小圓圈連結

    let html = "";
    areaAll[indexArea].forEach((value, index) => {
      html += `
    <li class='bullet${index + 1}' class="" href="#"><span class="h5">${value.number
        }</span></li>
    
   `;
    });

    document.querySelector(
      `.area-${1 + indexArea} .list-bullet ul`
    ).innerHTML = html;
  };
  const map = (indexArea) => {//左邊小地圖

    let html = "";
    areaAll[indexArea].forEach((value, index) => {
      html += `<section class="map-sec${index + 1}">
      <figcaption class="">
          <div class="h5 text-greyish-brown-three">${value.venue}館</div>
          
        </figcaption>
      <figure class="">
        <img src="${value.map}"
          class=""
          alt="展區${value.number}位置">
  
        
      </figure>
      </section>`;
    });

    document.querySelector(`.area-${1 + indexArea} .map`).innerHTML = html;
  };



  const bulletMap = (indexArea) => {//小圓圈和地圖連動效果
    

    areaAll[indexArea].forEach((value, index) => {
      const bulletThis = $(`.area-${1 + indexArea} .bullet${index + 1}`);
      

      $("#subNav a").on("click", function (event) {
        $(".list-bullet ul li").removeClass("hollow");
        $(".map section").removeClass("read");
      });

      $(window).on("scroll", function () {
        const bulletThis = $(`.area-${1 + indexArea} .bullet${index + 1}`);
        const bulletPre = $(`.area-${1 + indexArea} .bullet${index}`);
        const bulletNext = $(`.area-${1 + indexArea} .bullet${index + 2}`);
        const bulletLast = $(`.area-${1 + indexArea} .list-bullet li`).last();

        const mapThis = $(`.area-${1 + indexArea} .map-sec${index + 1}`);
        const mapPre = $(`.area-${1 + indexArea} .map-sec${index}`);
        const mapNext = $(`.area-${1 + indexArea} .map-sec${index + 2}`);
        const mapLast = $(`.area-${1 + indexArea} .map section`).last();

   
        const windowTop = $(window).scrollTop();
        const navHeight = $("#nav").height() - 50;

        const top =
          $(`.area-${1 + indexArea} .list-sec${index + 1}`).position().top -
          navHeight - 5;

        const bottomItem = $(bulletLast).position().top;

        if (windowTop >= top) {
          $(bulletPre).removeClass("hollow");
          $(mapPre).removeClass("read");
          $(bulletNext).removeClass("hollow");

          $(mapNext).removeClass("read");
          $(bulletThis).addClass("hollow");
          $(mapThis).addClass("read");
        }

        let bulletList = $(".list-bullet");
        let mapList = $(".map");
        var y = $(window).scrollTop();
        var mainTop = $("main").position().top;

        if (y > mainTop - 150) {
          $(bulletList).addClass("show");

          $(mapList).addClass("show");
        } else {
          $(bulletList).removeClass("show");
          $(mapList).removeClass("show");
        }

        if (y < bottomItem) {
          $(bulletLast).removeClass("hollow");
          $(mapLast).removeClass("read");
        }
      });

      

      bulletThis.on("click", function () { //左邊展區小圓圈連結 點擊滑動到該展區頂部
        
        const navHeight = $("#nav").height() - 50; //
        const top =
          $(`.area-${1 + indexArea} .list-sec${index + 1}`).position().top -
          navHeight;

        $("body, html").animate({ scrollTop: top }, 1000);
      });
    });
  };

  

  areaAll.forEach((value, indexArea) => {
    rightBox(indexArea);
    leftBox(indexArea);
    map(indexArea);
    bulletMap(indexArea);
  });

   //修正花魁車次選單底線樣式
   $(window).on("click", function (event) { //修正花魁車次選單底線樣式
    if ($("#orian-tab > a.nav-link").hasClass("active")) {
      $("#orian-tab > a.nav-link").addClass("orian-btline");
      $("#orian-tab").css(
        "border-bottom",
        "6px solid var(--greyish-brown-three)"
      );

      $("#orian-tab").removeClass("brown-underline");
    } else {
      $("#orian-tab").css(
        "border-bottom",
        "0px solid var(--greyish-brown-three)"
      );
      $("#orian-tab").addClass("brown-underline");
      $("#orian-tab > a.nav-link").removeClass("orian-btline");
    }
  });


  
};
