import Types from "./types";

const List = [
    {
        "id": 1,
        "date": "19.05.1919 - 12.00",
        "from": "Uğur Demirel",
        "subject": "Creating a disposable email address. Select the country-specific domain.",
        "content": "Hey, bugünün tarihine dikkat ettin mi ? Bu özel günü umarım unutmamışsındır. Kutlamalara bekliyorum", // mail başlığına tıklandığında açılacak olan e-posta detay içeriği
        "type": Types.INBOX
    },
    {
        "id": 2,
        "date": "29.10.1923 - 12.00",
        "from": "Eda Demirel",
        "subject": "Email confirmation, Signup, Test account, & Social networking.",
        "content": "Bugünden itibaren özgür olarak yaşamaya başladığımızı ilan ediyoruz. Bunu seninle paylaşmak istedik.",
        "type": Types.INBOX
    },
    {
        "id": 3,
        "date": "29.11.1991 - 14.00",
        "from": "Volkan Demirel",
        "subject": "Preventing Spam.QA Testing.",
        "content": "Bugünden itibaren özgür olarak yaşamaya başladığımızı ilan ediyoruz. Bunu seninle paylaşmak istedik.",
        "type": Types.TRASH
    }
];

export default List;
