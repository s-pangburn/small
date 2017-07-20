class CreateStories < ActiveRecord::Migration
  def change
    create_table :stories do |t|

      t.timestamps null: false
    end
  end
end
