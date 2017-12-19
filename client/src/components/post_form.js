import React from "react";
import "../scss/post_form.scss";
import Card, { CardHeader, CardActions, CardContent } from "material-ui/Card";
import Button from "material-ui/Button";
import TextField from 'material-ui/TextField';

export const PostForm = ({add}) => {
  
  const handleClick = (event) => {
    let body = document.getElementById('text-body').value
    if (body.trim() === '') return
    add(body)
    document.getElementById('text-body').value = ''
  }

  return (
    <div>
      <Card className='postForm'>
        <CardContent>
        <TextField
              autoFocus
              multiline
              rowsMax="10"
              id="text-body"
              fullWidth
              placeholder='How was your dream ?'
          />
        </CardContent>
        <CardActions>
          <Button onClick={e => handleClick(e)} dense color="primary">
            記録
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};