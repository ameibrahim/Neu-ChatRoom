 SELECT *
 FROM messages
 WHERE messages.chat_id = '$chatID' AND messages.message_id > "1698814762620"
 ORDER BY messages.message_id ASC