class Pin < ActiveRecord::Base
  attr_accessible :description
  attr_accessible :destroy
  attr_accessible :show
  attr_accessible :edit

  belongs_to :user
  validates :user_id, presence: true
end
