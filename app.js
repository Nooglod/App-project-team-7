
const ICONS = {
    nav: {
        home: "images/home.svg",
        search: "images/search.svg",
        fav: "images/star.svg",
        history: "images/file.svg"
    },
    header: {
        menu: "images/hamburger.svg", // Hamburger
        search: "https://cdn-icons-png.flaticon.com/512/54/54481.png",
        bell: "https://cdn-icons-png.flaticon.com/512/3602/3602145.png",
        user: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
        back: "https://cdn-icons-png.flaticon.com/512/271/271220.png",
        logo: "images/logo.svg" // Chair icon
    },
    actions: {
        starOn: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png", // Yellow Star
        starOff: "https://cdn-icons-png.flaticon.com/512/1828/1828970.png", // Empty/Gray Star
        share: "https://cdn-icons-png.flaticon.com/512/1828/1828950.png",
        check: "https://cdn-icons-png.flaticon.com/512/190/190411.png" // Success Checkmark
    }
};

// ==========================================
// 1. MOCK DATA
// ==========================================

const RECENT_ROOMS = [
    { id: 101, title: "학생복지관 3층 Exchange Box", image: "https://via.placeholder.com/150x150/e0e0e0/888?text=Exchange", isFav: true },
    { id: 102, title: "제1공학관 1층 해동스터디룸 4호", image: "https://via.placeholder.com/150x150/e0e0e0/888?text=Study+4", isFav: false, label: "최근 사용" },
    { id: 103, title: "HIT 2층 대회의실", image: "https://via.placeholder.com/150x150/e0e0e0/888?text=HIT", isFav: false }
];

const HOME_LIST_ROOMS = [
    { id: 201, title: "제1공학관 1층 해동스터디룸 4호", timeRange: "10:30 ~ 12:00", maxTime: "최대 2시간", extend: "불가", penalty: "있음", projector: "없음", image: "https://via.placeholder.com/150x150/e0e0e0/888?text=Study+Room+4" },
    { id: 202, title: "백남학술정보관 1층 캐리어홀", timeRange: "13:00 ~ 15:00", maxTime: "최대 3시간", extend: "가능", penalty: "없음", projector: "있음", image: "https://via.placeholder.com/150x150/e0e0e0/888?text=Carrier+Hall" }
];

const SEARCH_ALT_ROOMS = [
    { id: 301, title: "학술정보관 1층 커리어 룸", capacity: "수용 인원: 최대 5명", time: "이용 가능 시간대: 12:00 ~ 14:00", equip: "장비: 빔프로젝터 O, 멀티콘센트 O", image: "https://via.placeholder.com/150x150/e0f7fa/888?text=Career+Room" },
    { id: 302, title: "학술정보관 4층 그룹스터디룸", capacity: "수용 인원: 최대 8명", time: "이용 가능 시간대: 12:00 ~ 16:00", equip: "장비: 빔프로젝터 O, 멀티콘센트 O", image: "https://via.placeholder.com/150x150/e0f7fa/888?text=Group+Study" }
];

const SEARCH_LIST_ROOMS = [
    { id: 401, title: "제1공학관 105호(PBL강의실)", capacity: "수용 인원: 최대 30명", time: "이용 가능 시간대: 13:00 ~ 18:00", equip: "장비: 빔프로젝터 O, 멀티콘센트 X", image: "https://via.placeholder.com/150x150/e0f2f1/888?text=PBL+105" },
    { id: 402, title: "창업교육센터 Knowledge Bunker", capacity: "수용 인원: 최대 6명", time: "이용 가능 시간대: 09:00 ~ 18:00", equip: "장비: 빔프로젝터 O, 멀티콘센트 O", image: "https://via.placeholder.com/150x150/e0f2f1/888?text=Bunker" }
];

const RECENT_USAGE_DATA = [
    { id: 901, title: "제1공학관 105호(PBL강의실)", capacity: "수용 인원: 최대 30명", time: "이용 가능 시간대: 13:00 ~ 18:00", equip: "장비: 빔프로젝터 O, 멀티콘센트 X", image: "https://via.placeholder.com/150x150/e0f2f1/888?text=PBL+105" },
    { id: 902, title: "창업교육센터 Knowledge Bunker", capacity: "수용 인원: 최대 6명", time: "이용 가능 시간대: 09:00 ~ 18:00", equip: "장비: 빔프로젝터 O, 멀티콘센트 O", image: "https://via.placeholder.com/150x150/e0f2f1/888?text=Bunker" }
];

const HISTORY_CONFIRMED = [
    { id: 501, title: "제1공학관 105호(PBL강의실)", capacity: "수용 인원: 최대 30명", time: "이용 가능 시간대: 13:00 ~ 18:00", equip: "장비: 빔프로젝터 O, 멀티콘센트 X", image: "https://via.placeholder.com/150x150/e0f2f1/888?text=PBL+105", isFav: true },
    { id: 502, title: "창업교육센터 Knowledge Bunker", capacity: "수용 인원: 최대 6명", time: "이용 가능 시간대: 09:00 ~ 18:00", equip: "장비: 빔프로젝터 O, 멀티콘센트 O", image: "https://via.placeholder.com/150x150/e0f2f1/888?text=Bunker", isFav: true }
];

const WEEK_DAYS = [
    { day: "Sun", date: 20, isRed: true }, { day: "Mon", date: 21, isSelected: true }, { day: "Tue", date: 22 }, { day: "Wed", date: 23 }, { day: "Thu", date: 24 }, { day: "Fri", date: 25 }, { day: "Sat", date: 26, isBlue: true }
];

const TAGS_PURPOSE = ["전체", "팀 프로젝트", "개인 학습", "동아리 활동", "면접/발표 연습", "기타"];
const TAGS_EQUIP = ["화이트보드", "빔프로젝터", "모니터", "멀티 콘센트", "기타"];


// ==========================================
// 2. REUSABLE COMPONENTS
// ==========================================

// Common Room Card with Custom Star Image
const CommonRoomCard = ({ room, type = 'green', btn1 = '상세 보기', btn2 = '예약하기', onBtn1Click, onBtn2Click }) => {
    const [isFavorite, setIsFavorite] = React.useState(room.isFav || false);

    const toggleStar = (e) => {
        e.stopPropagation();
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={`search-card ${type}`}>
            {/* Custom PNG Star Icon */}
            <img 
                src={isFavorite ? ICONS.actions.starOn : ICONS.actions.starOff} 
                className="star-img-btn" 
                onClick={toggleStar}
                alt="Favorite"
            />

            <div className="sc-top">
                <img src={room.image} className="sc-img" alt={room.title} />
                <div className="sc-info">
                    <div className="sc-title">{room.title}</div>
                    {room.capacity && <div>👤 {room.capacity}</div>}
                    {room.time && <div>🕒 {room.time}</div>}
                    {room.timeRange && <div>🕒 {room.timeRange}</div>}
                    {room.equip && <div>💻 {room.equip}</div>}
                    {room.maxTime && <div>최대 시간: {room.maxTime}</div>}
                    {room.extend && <div>연장: {room.extend}</div>}
                </div>
            </div>
            
            {btn1 && (
                <div className="sc-btns">
                    <button className="btn-slate" onClick={(e) => { e.stopPropagation(); onBtn1Click(); }}>{btn1}</button>
                    <button className="btn-mint" onClick={(e) => { e.stopPropagation(); onBtn2Click(); }}>{btn2}</button>
                </div>
            )}
        </div>
    );
};

// Detail View Component with Custom Icons
const DetailView = ({ room, onBack, onReserve }) => {
    return (
        <>
            <div className="fav-header-simple">
                <img src={ICONS.header.back} className="back-icon-img" onClick={onBack} style={{position:'absolute', left:20}} />
                공간 상세
                <img src={ICONS.header.bell} className="icon-img" style={{position:'absolute', right:20}} />
            </div>

            <div className="content detail-content-wrapper">
                <div className="detail-top-row">
                    <img src={room.image} className="detail-main-img" />
                    <div className="detail-header-info">
                        <div className="detail-room-name-badge">{room.title}</div>
                        <button className="btn-location-detail">📍 상세 위치</button>
                    </div>
                </div>

                <div className="detail-section-label">예약 정보</div>
                <div className="detail-info-box">
                    <div>🕒 25년 10월 20일 12:00 ~14:00</div>
                    <div style={{marginTop:'5px'}}>👤 사용 인원: 4명</div>
                </div>

                <div className="detail-section-label">공간 설비/환경</div>
                <div className="detail-info-box">
                    <div className="fac-env-container">
                        <div className="fac-column">
                            <div className="fac-header">&lt;설비 항목&gt;</div>
                            <div className="fac-tag">화이트보드</div>
                            <div className="fac-tag">모니터</div>
                            <div className="fac-tag">빔프로젝트</div>
                            <div className="fac-tag">충전 콘센트</div>
                        </div>
                        <div className="env-column">
                            <div className="env-header">&lt;공간 환경&gt;</div>
                            <div className="env-bubble">“조용한 환경”</div>
                            <div className="env-bubble">“협업형 공간”</div>
                            <div className="env-bubble">“밝은 조명”</div>
                        </div>
                    </div>
                </div>

                <div className="detail-section-label">예약 규정</div>
                <div className="detail-info-box">
                    <ul className="rules-list">
                        <li>1. 예약은 최대 2시간까지 가능합니다.</li>
                        <li>2. 예약 시작 30분 전까지 취소 가능.</li>
                        <li>3. 10분 이상 미입실 시 노쇼 간주.</li>
                    </ul>
                </div>

                <div className="detail-action-area">
                    <button className="btn-action-cancel" onClick={onReserve} style={{background: '#4db6ac'}}>
                        예약하기
                    </button>
                    <div className="btn-action-row">
                        <button className="btn-action-sub">
                            <img src={ICONS.actions.share} style={{width:16, height:16, marginRight:5}} /> 공유하기
                        </button>
                        <button className="btn-action-sub">
                            <img src={ICONS.actions.starOff} style={{width:16, height:16, marginRight:5}} /> 즐겨찾기
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

// Success View Component with Custom Check Icon
const ReservationSuccess = ({ room, onConfirm }) => {
    return (
        <div className="app-container">
            <div className="fav-header-simple">
                <img src={ICONS.header.back} className="back-icon-img" onClick={onConfirm} style={{position:'absolute', left:20}} />
                예약 완료
            </div>

            <div className="content detail-content-wrapper" style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                <img src={ICONS.actions.check} style={{width:80, height:80, marginBottom:20}} />
                <h2 style={{marginBottom:'30px'}}>예약이 완료되었습니다.</h2>
                
                <div className="detail-info-box" style={{width:'100%'}}>
                    <h3 style={{fontSize:'16px', marginBottom:'10px'}}>{room.title}</h3>
                    <div>🕒 25년 10월 20일 12:00 ~14:00</div>
                    <div>👤 사용 인원: 4명</div>
                </div>

                <div className="detail-action-area" style={{width:'100%', marginTop:'auto'}}>
                    <button className="btn-action-cancel" onClick={onConfirm} style={{background: '#4db6ac'}}>
                        확인
                    </button>
                </div>
            </div>
        </div>
    );
};


// ==========================================
// 3. MAIN APP
// ==========================================

const App = () => {
    const [screen, setScreen] = React.useState('SPLASH');
    const [activeTab, setActiveTab] = React.useState('home');
    const [viewMode, setViewMode] = React.useState('list');
    const [selectedRoom, setSelectedRoom] = React.useState(null);
    const [showFilter, setShowFilter] = React.useState(false);
    const [selectedTags, setSelectedTags] = React.useState(["개인 학습", "멀티 콘센트"]);
    const [historyTab, setHistoryTab] = React.useState('confirmed');

    React.useEffect(() => {
        if(screen === 'SPLASH') setTimeout(() => setScreen('HOME'), 2000);
    }, [screen]);

    const switchTab = (tabName) => {
        setActiveTab(tabName);
        setViewMode('list'); 
        setShowFilter(false);
        setSelectedRoom(null);
    };

    const toggleTag = (tag) => {
        if (selectedTags.includes(tag)) setSelectedTags(selectedTags.filter(t => t !== tag));
        else setSelectedTags([...selectedTags, tag]);
    };

    const goDetail = (room) => {
        setSelectedRoom(room);
        setViewMode('detail');
    };

    const goReservation = (room) => {
        setSelectedRoom(room);
        setViewMode('success');
    };

    // --- NAVBAR WITH CUSTOM ICONS ---
    const NavBar = () => (
        <div className="nav-bar">
            <div className={`nav-item ${activeTab === 'home' ? 'active' : ''}`} onClick={()=>switchTab('home')}>
                <img src={ICONS.nav.home} className="nav-icon-img" />
                <span>홈</span>
            </div>
            <div className={`nav-item ${activeTab === 'search' ? 'active' : ''}`} onClick={()=>switchTab('search')}>
                <img src={ICONS.nav.search} className="nav-icon-img" />
                <span>공간 찾기</span>
            </div>
            <div className={`nav-item ${activeTab === 'fav' ? 'active' : ''}`} onClick={()=>switchTab('fav')}>
                <img src={ICONS.nav.fav} className="nav-icon-img" />
                <span>즐겨 찾기</span>
            </div>
            <div className={`nav-item ${activeTab === 'history' ? 'active' : ''}`} onClick={()=>switchTab('history')}>
                <img src={ICONS.nav.history} className="nav-icon-img" />
                <span>예약 내역</span>
            </div>
        </div>
    );

    // --- RENDER LOGIC ---

    if(screen === 'SPLASH') {
        return (
            <div className="app-container">
                <div className="splash-screen">
                    <img src={ICONS.header.logo} style={{width:80, height:80, marginBottom:10}} />
                    <div className="logo-text">어디서 하냥</div>
                </div>
            </div>
        )
    }

    if (viewMode === 'success' && selectedRoom) {
        return <ReservationSuccess room={selectedRoom} onConfirm={() => switchTab('home')} />;
    }

    if (viewMode === 'detail' && selectedRoom) {
        return (
            <div className="app-container">
                <DetailView 
                    room={selectedRoom} 
                    onBack={() => setViewMode('list')} 
                    onReserve={() => setViewMode('success')} 
                />
                <NavBar />
            </div>
        );
    }

    // --- TAB CONTENT ---
    let content;

    if (activeTab === 'search') {
        content = (
            <>
                <div className="header-wrapper">
                    <div className="top-row">
                        <div className="brand-logo">
                            <img src={ICONS.header.logo} className="icon-img" style={{marginRight:5}}/> 
                            어디서 하냥
                        </div>
                    </div>
                    <div className="search-container">
                        <img src={ICONS.header.menu} className="search-icon-left icon-img" onClick={() => setShowFilter(!showFilter)} />
                        <input type="text" className="search-input-fancy" placeholder="검색 내용" onClick={() => setActiveTab('search')} />
                        <img src={ICONS.header.search} className="search-icon-right icon-img" />
                    </div>
                    
                </div>
                <div className="content">
                    {showFilter ? (
                        <div className="filter-overlay">
                            <div className="filter-box">
                                <div className="filter-title-main">세부 필터</div>
                                <div className="filter-category-title">사용 목적</div>
                                <div className="filter-tags-grid">{TAGS_PURPOSE.map(tag=><div key={tag} className={`filter-chip-btn ${selectedTags.includes(tag)?'active':''}`} onClick={()=>toggleTag(tag)}>{tag}</div>)}</div>
                                <div className="filter-category-title">설비 여부</div>
                                <div className="filter-tags-grid">{TAGS_EQUIP.map(tag=><div key={tag} className={`filter-chip-btn ${selectedTags.includes(tag)?'active':''}`} onClick={()=>toggleTag(tag)}>{tag}</div>)}</div>
                                <div className="filter-actions-row"><button className="btn-filter-reset" onClick={()=>setSelectedTags([])}>필터 초기화</button><button className="btn-filter-apply" onClick={()=>setShowFilter(false)}>적용하기</button></div>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="search-section-title"><span>대체 공간 추천</span><span className="sort-badge">정렬 기능</span></div>
                            {SEARCH_ALT_ROOMS.map(room => (
                                <CommonRoomCard 
                                    key={room.id} room={room} type="blue" 
                                    onBtn1Click={() => goDetail(room)} 
                                    onBtn2Click={() => goReservation(room)} 
                                />
                            ))}
                            <div className="search-section-title" style={{marginTop:'10px'}}><span>가능한 공간 리스트</span></div>
                            {SEARCH_LIST_ROOMS.map(room => (
                                <CommonRoomCard 
                                    key={room.id} room={room} type="green" 
                                    onBtn1Click={() => goDetail(room)} 
                                    onBtn2Click={() => goReservation(room)} 
                                />
                            ))}
                            <button className="btn-more-wide">더 보 기</button>
                        </>
                    )}
                </div>
            </>
        );

    } else if (activeTab === 'fav') {
        content = (
            <>
                <div className="header-wrapper">
                    <div className="top-row">
                        <div className="brand-logo">
                            <img src={ICONS.header.logo} className="icon-img" style={{marginRight:5}}/> 
                            어디서 하냥
                        </div>
                    </div>
                    <div className="search-container">
                    <div className="search-container">
                        <img src={ICONS.header.menu} className="search-icon-left icon-img" onClick={() => setShowFilter(!showFilter)} />
                        <input type="text" className="search-input-fancy" placeholder="검색 내용" onClick={() => setActiveTab('search')} />
                        <img src={ICONS.header.search} className="search-icon-right icon-img" />
                    </div>
                    </div>
                </div>
                <div className="content">
                    <div className="fav-section-label">즐겨찾기</div>
                    {SEARCH_ALT_ROOMS.map(room => (
                        <CommonRoomCard 
                            key={room.id} room={{...room, isFav: true}} type="blue" 
                            onBtn1Click={() => goDetail(room)} 
                            onBtn2Click={() => goReservation(room)} 
                        />
                    ))}
                    <div className="recent-section-label">최근 사용</div>
                    <div style={{marginTop:'10px'}}>
                        {RECENT_USAGE_DATA.map(room => (
                            <CommonRoomCard 
                                key={room.id} room={{...room, label: 'recent'}} type="green" 
                                onBtn1Click={() => goDetail(room)} 
                                onBtn2Click={() => goReservation(room)} 
                            />
                        ))}
                    </div>
                    <button className="btn-more-wide">더 보 기</button>
                </div>
            </>
        );

    } else if (activeTab === 'history') {
        content = (
            <>
                <div className="header-wrapper">
                    <div className="top-row">
                        <div className="brand-logo">
                            <img src={ICONS.header.logo} className="icon-img" style={{marginRight:5}}/> 
                            어디서 하냥
                        </div>
                    </div>
                    <div className="search-container">
                        <img src={ICONS.header.menu} className="search-icon-left icon-img" onClick={() => setShowFilter(!showFilter)} />
                        <input type="text" className="search-input-fancy" placeholder="검색 내용" onClick={() => setActiveTab('search')} />
                        <img src={ICONS.header.search} className="search-icon-right icon-img" />
                    </div>
                </div>
                <div className="history-tabs">
                    <div className={`history-tab-item ${historyTab === 'confirmed' ? 'active' : ''}`} onClick={()=>setHistoryTab('confirmed')}>예약 확인</div>
                    <div className={`history-tab-item ${historyTab === 'canceled' ? 'active' : ''}`} onClick={()=>setHistoryTab('canceled')}>예약 취소</div>
                </div>
                <div className="content" style={{paddingTop:'10px'}}>
                    {historyTab === 'confirmed' ? (
                        HISTORY_CONFIRMED.map(room => (
                            <CommonRoomCard 
                                key={room.id} room={room} type="green" 
                                btn1="상세 보기" btn2="예약 취소"
                                onBtn1Click={() => goDetail(room)} 
                                onBtn2Click={() => alert('예약 취소 기능은 준비중입니다.')} 
                            />
                        ))
                    ) : (
                        <div style={{padding:'40px', textAlign:'center', color:'#999'}}>취소된 예약 내역이 없습니다.</div>
                    )}
                </div>
            </>
        );

    } else {
        // HOME TAB
        content = (
            <>
                <div className="header-wrapper">
                    <div className="top-row">
                        <div className="brand-logo">
                            <img src={ICONS.header.logo} className="icon-img" style={{marginRight:5}} /> 
                            어디서 하냥
                        </div>
                        <div className="header-icons">
                            <img src={ICONS.header.bell} className="icon-img" />
                            <img src={ICONS.header.user} className="icon-img" />
                        </div>
                    </div>
                    <div className="search-container">
                        <img src={ICONS.header.menu} className="search-icon-left icon-img" onClick={() => setShowFilter(!showFilter)} />
                        <input type="text" className="search-input-fancy" placeholder="검색 내용" onClick={() => setActiveTab('search')} />
                        <img src={ICONS.header.search} className="search-icon-right icon-img" />
                    </div>
                </div>
                <div className="content">
                    <div className="horizontal-section">
                        <div className="section-header-row"><span className="see-more">더보기</span></div>
                        <div className="horizontal-scroll">{RECENT_ROOMS.map(room => (
                            <div key={room.id} className="mini-card">
                                <div className="mini-card-img">
                                    <img src={room.image} style={{width:'100%', height:'100%', objectFit:'cover'}} />
                                    <img src={room.isFav ? ICONS.actions.starOn : ICONS.actions.starOff} className="mini-fav-icon" style={{width:20, height:20}} />
                                    {room.label && <div style={{position:'absolute', top:10, right:30, background:'rgba(255,255,255,0.8)', fontSize:'10px', padding:'2px 4px', borderRadius:'2px'}}>{room.label}</div>}
                                </div>
                                <div className="mini-card-info"><div className="mini-card-title">{room.title}</div><button className="btn-mini-reserve" onClick={() => goReservation(room)}>예약하기</button></div>
                            </div>
                        ))}</div>
                    </div>
                    <div className="date-section">
                        <div className="year-month">2025.10</div>
                        <div className="week-row">{WEEK_DAYS.map((d, i) => (<div key={i} className={`day-item ${d.isSelected ? 'selected' : ''}`}><span className={`day-name ${d.isRed?'red':''} ${d.isBlue?'blue':''}`}>{d.day}</span><span className="day-number">{d.date}</span></div>))}</div>
                    </div>
                    <div className="list-section">
                        {HOME_LIST_ROOMS.map(room => (
                            <CommonRoomCard 
                                key={room.id} room={room} type="green" 
                                onBtn1Click={() => goDetail(room)} 
                                onBtn2Click={() => goReservation(room)} 
                            />
                        ))}
                    </div>
                </div>
            </>
        );
    }

    return (
        <div className="app-container">
            {content}
            <NavBar />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);