class User < ActiveRecord::Base
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :password_digest, uniqueness: true
end
