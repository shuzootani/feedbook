class PostSerializer < ActiveModel::Serializer
  attributes :id, :body, :owner, :created_at

  def owner
    object.user
  end

  def created_at
    object.created_at.strftime('%Y年%m月%d日 %H:%M')
  end
end
