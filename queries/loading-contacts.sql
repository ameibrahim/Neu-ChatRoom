SELECT chat_reference.combo_id, chat_reference.chat_id, chat_reference.receiver, chat_reference.sender, users.email
FROM chat_reference
INNER JOIN users ON chat_reference.sender = users.id
WHERE sender = "xyz"