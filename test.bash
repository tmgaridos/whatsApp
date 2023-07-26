#120363161641161137@g.us

curl -X GET http://localhost:9090/rectrack-notification -H "Content-Type: application/json" --data-binary @- <<DATA
{
    "message":"hellow fucking world",
    "groupId":"120363161641161137@g.us"
}
DATA