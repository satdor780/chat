interface Message {
    messageId: number;
    content: string;
    date: string; // Можно использовать Date, если вы будете работать с объектами даты
    isMessageRead: boolean;
    senderId: number;
}



// Определение типа для чата
interface Chat {
    chatId: number;
    interviewId: number;
    interviewName: string,
    interviewProfileImage: string,
    messageList: Message[];
}

// Определение типа для пользователя
export default interface IUsers {
    id: number;
    name: string;
    profileImage: string;
    chatList: Chat[];
}