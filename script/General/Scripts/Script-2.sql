create table Guild(
ID_Guild integer AUTO_INCREMENT not null,
primary key (ID_Guild),
 ID_Events_FK integer not null,
GuildName varchar(50) not null,
StartDate date not null,
EndDate date not null,
GuildFlag varchar(1000) not null
);


create table Skin (
ID_Skin integer AUTO_INCREMENT not null,
primary key (ID_Skin),
 SkinName varchar(100) not null,
 ImagePath varchar(1000) not null,
MinXP integer not null,
ChampiesCost integer not null,
SkinType Enum ('SkinColor','Hair','Top','Bottom','Shoes','Others') not null

);

create table Closet (
ID_Closet integer AUTO_INCREMENT not null,
primary key (ID_Closet),
ID_Skin_FK integer not null

);


create table Events (
ID_Event integer AUTO_INCREMENT not null,
primary key (ID_Event),
 EventName varchar(100) not null,
 EventDate date not null,
EventType Enum ('Kick-off','Check-point','Jantar de Natal','Dia de Familia','Happy-Hour','Boardgames','Viagem Anual','Talking-Session','Others') not null

);




create table Rewards (
ID_Reward integer AUTO_INCREMENT not null,
primary key (ID_Reward),
ID_PlayerGiver_FK integer not null,
ID_PlayerReceiver_FK integer not null,
ChampiesGiven integer not null,
DateOfReward date not null,
Approved boolean,
TimeSpent Enum ('Short','Medium','Long')not null
);





create table Video (
ID_Video integer AUTO_INCREMENT not null,
primary key (ID_Video),
VideoName varchar(100) not null,
Duration integer not null,

);



create table WatchedVideos (
ID_Video_FK integer not null,
ID_Player_FK integer not null
);


create table AttendedEvents (
ID_Event_FK integer not null,
ID_Player_FK integer not null
);


create table Player (
ID_Player integer AUTO_INCREMENT not null,
 primary key (ID_Player),
 ID_Guild_FK integer not null,
 ID_Closet_FK integer not null,
 UserName varchar(100) not null,
 Email varchar(100) not null,
 password varchar(100) not null ,
 Gender Enum ('M','F') not null,
UserType Enum ('Warrior','GuildMaster','Ancient') not null,
XP integer,
ChampiesToGive integer,
MyChampies integer

);

























