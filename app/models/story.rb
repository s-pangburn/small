# == Schema Information
#
# Table name: stories
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  body        :text             not null
#  author_id   :integer          not null
#  image_url   :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :string
#

class Story < ActiveRecord::Base
  validates :title, :body, :author, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  has_many :comments
end
